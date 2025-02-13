<template>
    <div class="folder-button">
        <el-button class="el-folder-button" :icon="FolderIcon" round @click="openFolderDialog">New Folder
        </el-button>
        <el-dialog class="folder-dialog" v-model="folderDialogFlag" title="New Folder" width="390px" draggable>
            <el-form >
                <el-form-item class="folder-dialog-item">
                    <el-input v-model="folderName" placeholder="请输入文件夹名称">
                        <template #append>
                            <el-button class="search-button" :icon="Search" @click="addFolder">确认</el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <!-- <el-form-item class="folder-dialog-button"> -->
                    <!-- <el-button type="primary" plain>确认</el-button> -->
                <!-- </el-form-item> -->
            </el-form>
        </el-dialog>
    </div>
</template>

<script setup>
import { fileInfoState } from '@/store/fileState';
import { FolderAdd } from '@element-plus/icons-vue';
import { ref, toRaw } from 'vue';
import fileAPI from '@/api/file';
const fileState = fileInfoState();
const folderName = ref('')
const FolderIcon = FolderAdd
const folderDialogFlag = ref(false)
const openFolderDialog = async () => {
    folderDialogFlag.value = true;
}
const addFolder = async () => {
    let data = toRaw(fileState.bcData)
    let params = {
        parentId: 0,
        folderName: folderName.value
    }
    if (data.length != 0) {
        params.parentId = data.at(data.length - 1).id
    }
    await fileAPI.addFolder(params);
    fileState.fetchFiles()
    folderName.value = ''
    folderDialogFlag.value = false
}
</script>

<style lang="scss">
.folder-dialog {
    .folder-dialog .el-dialog__title {
        font-size: 13px;
    }
    .folder-dialog-item .el-input {
        width: 335px;
        margin-left: 10px;
        margin-right: 10px
    }

    .folder-dialog-button {
        position: relative;
        left: 335px;
        padding-top: 10px;
        margin-bottom: 0px;
    }
}
</style>