<template>
  <el-table class="file-list" :data="filesData" @selection-change="selectValueChange" stripe height="100%" min-height="100px"
    empty-text="暂无数据">
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

          <el-input v-if="scope.row.isEditing == 1" v-model.trim="scope.row.folderName"></el-input>
          <div v-else>{{ scope.row.fileName }}</div>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="fileSize" label="大小" />
    <el-table-column prop="fileType" label="类型">
      <template v-slot="scope">
        <div v-if="scope.row.fileType == null">文件夹</div>
        <div v-if="scope.row.fileType == 4">视频</div>
        <div v-if="scope.row.fileType == 3">音频</div>
        <div v-if="scope.row.fileType == 2">图像</div>
        <div v-if="scope.row.fileType == 5">压缩文件</div>
        <div v-if="scope.row.fileType == 6">其他</div>
      </template>
    </el-table-column>
    <el-table-column prop="modifyTime" label="修改时间" />
    <el-table-column fixed="right" label="Operations" min-width="80">
      <template v-slot="scope">
        <el-button v-if="scope.row.isEditing == 1" link type="primary" size="small"
          @click="save(scope.row)">Save</el-button>
        <el-button v-if="scope.row.isEditing == 1" link type="primary" size="small"
          @click="cancel(scope.row)">Cancel</el-button>
        <el-button v-if="scope.row.isEditing == 0 || scope.row.isEditing == null" link type="primary" size="small"
          @click="select(scope.row)">Select</el-button>
        <el-button v-if="scope.row.isEditing == 0 || scope.row.isEditing == null" link type="primary" size="small"
          @click="edit(scope.row)">Edit</el-button>
        <el-button v-if="scope.row.isEditing == 0 || scope.row.isEditing == null" link type="danger" size="small"
          @click="deleteFile(scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import fileAPI from '@/api/file';
import { fileInfoState } from '@/store/fileState';
import { computed, toRaw } from 'vue';
const fileState = fileInfoState();
const filesData = computed(() => fileState.fileData)

const deleteFile = async (rows) => {
  let params = {}
  Object.assign(params, rows);
  console.log(params)

}
const edit= async (rows) => {
  let params = {};
  Object.assign(params, rows);
  await fileState.editFolder(params);
}
const save = async (rows) => {
  let list = toRaw(fileState.bcData)
  let item = list.at(list.length - 1)
  let params = {
    parentId: item?.id
  }
  Object.assign(params, rows)
  console.log(params)
  await fileAPI.addFolder(params);
  fileState.fetchFiles();
  fileState.fetchBreadcrumb();
}
const select = async (rows) => {

  await fileState.updateQueryParams({ parentId: rows.id });
  fileState.fetchFiles();
  fileState.fetchBreadcrumb();
}
const cancel = async (rows) => {
  let params = {}
  Object.assign(params, rows)
  await fileState.cancelFolder(params);
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