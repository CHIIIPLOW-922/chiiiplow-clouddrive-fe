<template>
  <el-breadcrumb class="breadcrumb" :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style lang="scss">
.breadcrumb{
  // border-bottom:0.005px dotted lightgray;
  margin: 10px 0 10px 10px;
  font-size: 17px;
}
</style>