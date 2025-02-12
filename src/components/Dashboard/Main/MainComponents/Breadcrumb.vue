<template>
  <div class="breadcrumb">
    <el-button  @click="click(0)" text :disabled="list == null || list.length === 0">全部文件</el-button>
    <el-button v-for="(item, index) in list" :key="index" @click="click(item.id)" text :disabled="index === list.length - 1" >{{ item.fileName }}
    </el-button>
    <!-- 插入图标 -->
    
  </div>
</template>

<script setup>
import { fileInfoState } from '@/store/fileState';
import { computed } from 'vue';
const fileState = fileInfoState();
const list = computed(()=> fileState.bcData);
// const list = ref([])
const click = async (args) => {
  console.log(args)
  let params = {
    parentId: args
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
  font-size: 17px;
}
</style>