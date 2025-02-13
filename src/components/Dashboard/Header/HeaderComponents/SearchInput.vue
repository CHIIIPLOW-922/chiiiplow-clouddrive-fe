<template>
  <el-input class="search-input" placeholder="please typing ..." v-model.trim="keyword" clearable>
    <template #append>
      <el-button class="search-button" :icon="Search" @click="search"/>
    </template>
  </el-input>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref, getCurrentInstance, computed } from 'vue';
import { fileInfoState } from '@/store/fileState';
const fileState = fileInfoState();
// import message from '@/utils/MessageUtils'; 
const { proxy } = getCurrentInstance();
const keyword = ref('');
const search = async () => {
  if (keyword.value == '' || keyword.value == null || keyword.value == undefined) {
    proxy.MessageUtils.error("搜索关键字不能为空");
    return;
  }
  await fileState.updateQueryParams({search: keyword.value});
  fileState.fetchSearchFiles();
  keyword.value = ''
}
</script>

<style lang="scss">
.search-input {
  width: 300px;
  
  .search-button {}
}
</style>