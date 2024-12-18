<template>
  <el-input class="search-input" placeholder="please typing ..." v-model.trim="keyword" clearable>
    <template #append>
      <el-button class="search-button" :icon="Search" @click="search"/>
    </template>
  </el-input>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref, getCurrentInstance } from 'vue';
// import message from '@/utils/MessageUtils'; 
const { proxy } = getCurrentInstance()
const keyword = ref('')
const search = () => {
  const params = keyword.value
  if (params == '' || params == undefined || params == null) {
    proxy.MessageUtils.error("搜索内容不能为空！")
    // message.error("搜索内容不能为空！")
  }
}
</script>

<style lang="scss">
.search-input {
  width: 300px;
  
  .search-button {}
}
</style>