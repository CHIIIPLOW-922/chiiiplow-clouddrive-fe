<template>
  <div class="breadcrumb-container">
    <el-breadcrumb :separator-icon="ArrowRightIcon" class="breadcrumb">
      <el-breadcrumb-item >
        <el-button @click="click(0, list == null || list.length === 0)" text :type="list == null || list.length === 0 ? 'plain' : 'primary'" :disabled="list == null || list.length === 0">全部文件</el-button>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in list" :key="index" >
        <el-button @click="click(item.id, index == list.length - 1)" text :type="index == list.length - 1 ? 'plain' : 'primary'" :disabled="index == list.length - 1">{{ item.fileName }}</el-button>
      </el-breadcrumb-item>
    </el-breadcrumb>

  </div>
</template>

<script setup>
import { fileInfoState } from '@/store/fileState';
import {ArrowRight} from '@element-plus/icons-vue';
import { computed, toRaw } from 'vue';
const ArrowRightIcon = ArrowRight;
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