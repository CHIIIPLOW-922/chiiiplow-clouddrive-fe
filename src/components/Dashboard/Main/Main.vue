<template>
  <div class="main">
    <div class="main-breadcrumb">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="main-file-list">
      <FileList></FileList>
    </div>
    <!-- <div class="main-file-grid">
      <FileGrid></FileGrid>
    </div> -->
    <div class="main-pagination">
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Dashboard/Main/MainComponents/Breadcrumb.vue';
import FileList from '@/components/Dashboard/Main/MainComponents/FileList.vue';
import Pagination from '@/components/Dashboard/Main/MainComponents/Pagination.vue';
import { fileInfoState } from '@/store/fileState';
const fileState = fileInfoState();
const fetchBreadcrumbs = async () => {
  await fileState.fetchBreadcrumb();
} 
const fetchFileList = async ()=>{
  await fileState.fetchFiles()
  
}
fetchFileList();
fetchBreadcrumbs();
</script>

<style lang="scss">
.main{
  display: grid;
  grid-template-rows: 35px 1fr 71px; // 头-内容-分页
  height: 1fr;
  .main-file-list{
    // max-height: calc(1fr - 80px - 60px);
    // padding-top: 10px;
    // height: 60%;
    overflow-y: hidden;
  }
  .main-pagination{
    // border-top: 1px solid var(--el-border-color);
    display: flex;
    justify-content: center;
    // padding-top: 25px;
    align-items: center;
    // margin: 10px 0 10px 100px;
  }
}
// .main {
//   grid-area: main;
//   display: flex;
//   flex-direction: column;
//   // height: 100%;
//   // overflow: hidden; // 外层容器限制溢出

//   .main-breadcrumb {
//     flex-shrink: 0; // 禁止收缩
//   }

//   .main-file-list {
//     flex: 1 1 auto;
//     min-height: 0;
//     // overflow-y: auto;
//   }

//   .main-pagination {
//     display: flex;
//     justify-content: center;
//     padding-bottom: 10px;
//     align-items: center;
//     z-index: 10;
//     // margin-top: 20px;
//     // margin: 10px 0 10px 100px;
//   }
// }
</style>