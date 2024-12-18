<template>
  <div class="main">
    <FileList></FileList>
  </div>
</template>

<script setup>
import FileList from '@/components/Dashboard/Main/MainComponents/FileList.vue';
</script>

<style lang="scss">
.main{
  grid-area: main;
  overflow-y: auto;
  // border: 1px solid black;
}
</style>