<template>
  <div class="breadcrumb-container">
    <el-breadcrumb :separator-icon="ArrowRightIcon" class="breadcrumb">
      <el-breadcrumb-item >
        <el-button v-if="fileState.queryParams.fileTypeName == null" @click="click(0, list == null || list.length === 0)" text :type="list == null || list.length === 0 ? 'info' : 'primary'" link>全部文件</el-button>
        <el-button v-if="fileState.queryParams.fileTypeName == 2" @click="click(0, list == null || list.length === 0)" text :type="list == null || list.length === 0 ? 'info' : 'primary'" link>图片</el-button>
        <el-button v-if="fileState.queryParams.fileTypeName == 3" @click="click(0, list == null || list.length === 0)" text :type="list == null || list.length === 0 ? 'info' : 'primary'" link>文档</el-button>
        <el-button v-if="fileState.queryParams.fileTypeName == 4" @click="click(0, list == null || list.length === 0)" text :type="list == null || list.length === 0 ? 'info' : 'primary'" link>视频</el-button>
        <el-button v-if="fileState.queryParams.fileTypeName == 5" @click="click(0, list == null || list.length === 0)" text :type="list == null || list.length === 0 ? 'info' : 'primary'" link>音乐</el-button>
        <el-button v-if="fileState.queryParams.fileTypeName == 6" @click="click(0, list == null || list.length === 0)" text :type="list == null || list.length === 0 ? 'info' : 'primary'" link>其他</el-button>
        <el-button v-if="fileState.queryParams.fileTypeName == 7" @click="click(0, list == null || list.length === 0)" text :type="list == null || list.length === 0 ? 'info' : 'primary'" link>回收站</el-button>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in list" :key="index" >
        <el-button @click="click(item.id, index == list.length - 1)" text :type="index == list.length - 1 ? 'info' : 'primary'" link>{{ item.fileName }}</el-button>
      </el-breadcrumb-item>
    </el-breadcrumb>

  </div>
</template>

<script setup>
import { fileInfoState } from '@/store/fileState';
import { ArrowRightBold } from '@element-plus/icons-vue';
import { computed } from 'vue';
const ArrowRightIcon = ArrowRightBold;
const fileState = fileInfoState();
const list = computed(()=> fileState.bcData);
const click = async (id, flag) => {
  if (flag) return;
  let params = {
    parentId: id
  }
  await fileState.updateQueryParams(params);
  fileState.fetchBreadcrumb();
  fileState.fetchFiles();
}
</script>

<style lang="scss">
.breadcrumb{
  // border-bottom:0.005px dotted lightgray;
  margin: 10px 0 10px 10px;
  font-size: 15px;
}
</style>