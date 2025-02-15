<template>
    <div class="folder-button">
        <el-button class="el-folder-button" :icon="FolderIcon" round @click="newFolder" :disabled="fileState.searchFlag">New Folder
        </el-button>
    </div>
</template>

<script setup>
import { fileInfoState } from '@/store/fileState';
import { FolderAdd } from '@element-plus/icons-vue';
import { toRaw } from 'vue';
const fileState = fileInfoState();
const FolderIcon = FolderAdd
const newFolder = async () => {
    let data = toRaw(fileState.bcData)
    let flag = false;
    data.forEach(item => {
        if (item.folderFlag == false) {
            flag = true
        }
    })
    if (flag) return;
    await fileState.newFolder();
}
</script>

<style lang="scss">
.folder-dialog {
}
</style>