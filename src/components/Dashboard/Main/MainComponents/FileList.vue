<template>
  <el-table class="file-list" :data="tableData" @selection-change="selectValueChange" stripe @row-click="click">
    <el-table-column type="selection" />
    <el-table-column prop="name" label="文件名">
      <template v-slot="scope">
        <div class="file-name">
          <img class="file-icon" v-if="scope.row.type == 'folder'" src="@/assets/image/file-icon/folder.png" alt="">
          <img class="file-icon" v-if="scope.row.type == 'video'" src="@/assets/image/file-icon/video.png" alt="">
          <img class="file-icon" v-if="scope.row.type == 'audio'" src="@/assets/image/file-icon/audio-file.png" alt="">
          <img class="file-icon" v-if="scope.row.type == 'image'" src="@/assets/image/file-icon/image-file.png" alt="">           
          <img class="file-icon" v-if="scope.row.type == 'zip'" src="@/assets/image/file-icon/zip-file.png" alt="">           
          <img class="file-icon" v-if="scope.row.type == 'unknown'" src="@/assets/image/file-icon/unknown-mail.png" alt="">          

          <div>{{ scope.row.name }}</div>
        </div>
      </template>

    </el-table-column>
    <el-table-column prop="size" label="大小" />
    <el-table-column prop="type" label="类型" />
    <el-table-column prop="date" label="修改时间" />
  </el-table>
</template>

<script setup>
const click = (rows) => {
  let params = {}
  Object.assign(params, rows);
  console.log(params)
} 
const selectValueChange = (rows) => {
  let params = []
  rows.forEach(item => {
    let target = {}
    Object.assign(target, item);
    params.push(target);
  })
  console.log(params)
}
const tableData = [
  {
    type: "folder",
    name: '测试2',
    size: '10KB',
    date: '2016-05-02'
  },
  {
    type: "video",
    name: '测试1',
    size: '10KB',
    date: '2016-05-01'
  },
  {
    type: "audio",
    name: '测试3',
    size: '10KB',
    date: '2016-05-04'
  },
  {
    type: "image",
    name: '测试4',
    size: '10KB',
    date: '2016-05-04'
  },
  {
    type: "zip",
    name: '测试6',
    size: '10KB',
    date: '2016-05-04'
  },
  {
    type: "unknown",
    name: '测试4',
    size: '10KB',
    date: '2016-05-04'
  },
]
</script>

<style lang="scss">
.file-list {
  border-top: 0.05px dotted lightgray;
  .file-name {
    display: flex;
    // justify-content: center;
    align-items: center;
    .file-icon {
      position: relative;
      // top: 5px;
      margin-right: 20px;
      width: 40px;
      height: 40px;
      // margin-top: 5px;
    }
  }
}
</style>