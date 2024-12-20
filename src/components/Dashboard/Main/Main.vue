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
import FileList from '@/components/Dashboard/Main/MainComponents/FileList.vue';
import FileGrid from '@/components/Dashboard/Main/MainComponents/FileGrid.vue';
import Breadcrumb from '@/components/Dashboard/Main/MainComponents/Breadcrumb.vue';
import Pagination from '@/components/Dashboard/Main/MainComponents/Pagination.vue';

</script>

<style lang="scss">
.main{
  grid-area: main;
  // overflow-y: auto;
  // border: 1px solid black;
  .main-breadcrumb {
    // margin: 10px 0 10px 5px;

  }
  .main-file-list{
    // padding-top: 10px;
    // height: 60%;
    // overflow-y: auto;
  }
  .main-pagination{
    display: flex;
    justify-content: center;
    padding-top: 25px;
    align-items: center;
    // margin: 10px 0 10px 100px;
  }
}
</style>