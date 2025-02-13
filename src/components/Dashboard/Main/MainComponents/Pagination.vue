<template>
  <el-pagination
      class="pagination"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 30, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
</template>

<script setup>
import { fileInfoState } from '@/store/fileState';
import { computed, ref } from 'vue';
const fileState = fileInfoState();
const currentPage = computed(()=> fileState.current);
const total = computed(()=> fileState.total);
const pageSize = ref(30);

const handleCurrentChange = async (args) => {
  let params = {
    pageNo: args,
    pageSize: pageSize.value
  }
  await fileState.updateQueryParams(params)
  fileState.fetchFiles()
  fileState.fetchBreadcrumb();
}

const handleSizeChange = async (args) => {
  console.log(args)
  let params = {
    pageNo: currentPage.value,
    pageSize: args
  }
  await fileState.updateQueryParams(params)
  fileState.fetchFiles()
  fileState.fetchBreadcrumb();
} 
</script>

<style lang="scss">
.pagination{
  height: 50px;
}
</style>