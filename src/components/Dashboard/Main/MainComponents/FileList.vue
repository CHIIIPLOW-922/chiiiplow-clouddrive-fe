<template>
  <el-table class="file-list" :data="tableData" ref="multipleTableRef" @selection-change="test" table-layout="fixed" stripe>
    <el-table-column type="selection" width="180" />
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script setup>
const test = (rows)=>{
  let params = []
  rows.forEach(item => {
    let target = {}
    Object.assign(target, item);
    params.push(target);
  })
  console.log(params)
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style lang="scss">
.file-list {

}
</style>