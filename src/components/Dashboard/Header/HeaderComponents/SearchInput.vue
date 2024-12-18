<template>
  <el-input class="search-input" placeholder="please typing ...">
    <template #append>
        <el-button class="search-button" :icon="Search" @click="search"/>
      </template>
  </el-input>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
const search = ()=>{
    console.log('searching')
}
</script>

<style lang="scss">
.search-input {
    .search-button{
        
    }
}
</style>