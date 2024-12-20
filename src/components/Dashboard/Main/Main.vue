<template>
  <div class="main">
    <div class="main-breadcrumb">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="main-file-list">
      <FileList></FileList>
    </div>
  </div>
</template>

<script setup>
import FileList from '@/components/Dashboard/Main/MainComponents/FileList.vue';
import Breadcrumb from '@/components/Dashboard/Main/MainComponents/Breadcrumb.vue';

</script>

<style lang="scss">
.main{
  grid-area: main;
  overflow-y: auto;
  // border: 1px solid black;
  .main-breadcrumb {
    // margin: 10px 0 10px 5px;

  }
  .main-file-list{
    // padding-top: 10px;
  }
}
</style>