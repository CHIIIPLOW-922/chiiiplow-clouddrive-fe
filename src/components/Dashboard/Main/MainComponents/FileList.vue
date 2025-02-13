<template>
  <el-table class="file-list" :data="filesData" @selection-change="selectValueChange" stripe height="837px" @row-click="click" empty-text="暂无数据">
    <el-table-column type="selection" />
    <!-- <el-table-column prop="id" label="id" v-show="!1" /> -->
    <el-table-column prop="fileName" label="文件名">
      <template v-slot="scope">
        <div class="file-name">
          <img class="file-icon" v-if="scope.row.fileType == null" src="@/assets/image/file-icon/folder.png" alt="">
          <img class="file-icon" v-if="scope.row.fileType == 4" src="@/assets/image/file-icon/video.png" alt="">
          <img class="file-icon" v-if="scope.row.fileType == 3" src="@/assets/image/file-icon/audio-file.png" alt="">
          <img class="file-icon" v-if="scope.row.fileType == 2" src="@/assets/image/file-icon/image-file.png" alt="">           
          <img class="file-icon" v-if="scope.row.fileType == 5" src="@/assets/image/file-icon/zip-file.png" alt="">           
          <img class="file-icon" v-if="scope.row.fileType == 6" src="@/assets/image/file-icon/unknown-mail.png" alt="">          

          <div>{{ scope.row.fileName }}</div>
        </div>
      </template>

    </el-table-column>
    <el-table-column prop="fileSize" label="大小"/>
    <el-table-column prop="fileType" label="类型" >
      <template v-slot="scope">
        <div v-if="scope.row.fileType==null">文件夹</div>
        <div v-if="scope.row.fileType==4">视频</div>
        <div v-if="scope.row.fileType==3">音频</div>
        <div v-if="scope.row.fileType==2">图像</div>
        <div v-if="scope.row.fileType==5">压缩文件</div>
        <div v-if="scope.row.fileType==6">其他</div>
      </template>
    </el-table-column>
    <el-table-column prop="modifyTime" label="修改时间" />
  </el-table>
</template>

<script setup>
import { fileInfoState } from '@/store/fileState';
import { computed } from 'vue';
const fileState = fileInfoState();
const filesData = computed(()=> fileState.fileData) 

const click = async (rows) => {
  await fileState.updateQueryParams({parentId: rows.id});
  fileState.fetchFiles()
  fileState.fetchBreadcrumb();
} 
const selectValueChange = (rows) => {
  let params = []
  rows.forEach(item => {
    let target = {}
    Object.assign(target, item);
    params.push(target);
  })
  console.log(params)
}
</script>

<style lang="scss">
.file-list {
  border-top: 1px solid var(--el-border-color);
  .file-name {
    display: flex;
    // justify-content: center;
    align-items: center;
    .file-icon {
      position: relative;
      // top: 5px;
      margin-right: 20px;
      width: 40px;
      height: 40px;
      // margin-top: 5px;
    }
  }
}
</style>