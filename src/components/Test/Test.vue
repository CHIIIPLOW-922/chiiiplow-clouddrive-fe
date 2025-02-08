<template>
    <input type="file" @change="handleFileSelect">
  </template>
  
  <script setup>
  import axios from 'axios';
  import SparkMD5 from 'spark-md5';
  
  const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB
  
  // 计算文件指纹
  async function calculateFileHash(file) {
    return new Promise((resolve) => {
      const spark = new SparkMD5.ArrayBuffer();
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = (e) => {
        spark.append(e.target.result);
        resolve(spark.end());
      };
    });
  }
  
  // 分片上传
  async function handleFileSelect(e) {
    const file = e.target.files[0];
    const fileHash = await calculateFileHash(file);
    
    // 初始化上传
    const { data: { uploadId, uploadedChunks } } = await axios.post('/api/upload/init', { 
      fileName: file.name,
      fileHash,
      chunkSize: CHUNK_SIZE
    });
  
    // 生成分片
    const chunks = Array.from({ length: Math.ceil(file.size / CHUNK_SIZE) }, (_, i) => ({
      index: i,
      start: i * CHUNK_SIZE,
      end: Math.min((i + 1) * CHUNK_SIZE, file.size)
    })).filter(chunk => !uploadedChunks.includes(chunk.index));
  
    // 并发上传（限制3个并行）
    const pool = new ParallelPool(3);
    await Promise.all(chunks.map(chunk => 
      pool.add(() => uploadChunk(file, chunk, uploadId, fileHash))
    ));
  
    // 合并分片
    await axios.post('/api/upload/complete', { uploadId, fileHash });
  }
  
  async function uploadChunk(file, chunk, uploadId, fileHash) {
    const formData = new FormData();
    formData.append('file', file.slice(chunk.start, chunk.end));
    formData.append('chunkIndex', chunk.index);
    
    // 获取预签名URL直传MinIO
    const { data: { presignedUrl } } = await axios.get(`/api/upload/presigned-url?uploadId=${uploadId}&chunk=${chunk.index}`);
    
    await axios.put(presignedUrl, formData.get('file'), {
      headers: { 'Content-Type': 'application/octet-stream' }
    });
  }
  
  // 并发控制类
  class ParallelPool {
    constructor(max) {
      this.max = max;
      this.queue = [];
      this.running = 0;
    }
    add(task) {
      return new Promise((resolve, reject) => {
        this.queue.push(() => task().then(resolve).catch(reject));
        this.run();
      });
    }
    run() {
      while (this.running < this.max && this.queue.length) {
        const task = this.queue.shift();
        task().finally(() => {
          this.running--;
          this.run();
        });
        this.running++;
      }
    }
  }
  </script>