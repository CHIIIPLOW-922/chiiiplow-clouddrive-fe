<template>
  <div class="upload-button">
    <el-button class="el-upload" @click="openUploadDialog" type="primary" round :icon="UploadIcon" plain>Upload
    </el-button>
  </div>
</template>

<script setup>
import { Upload } from '@element-plus/icons-vue'
const UploadIcon = Upload;
const openUploadDialog = ()=>{

}
</script>

<style lang="scss">
.upload-button{
    
    // border: 0.1px solid var(--el-border-color);
    // width: 50px;
    // height: 50px;
}
</style>