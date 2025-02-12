<template>
    <div class="folder-button">
        <el-button class="el-folder-button" :icon="FolderIcon" round @click="addFolder">New Folder 
        </el-button>
        <el-dialog v-model="folderDialogFlag" title="新增文件夹">
            <el-form>
                <el-form-item>
                    <el-input></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script setup>
import { fileInfoState } from '@/store/fileState';
import { FolderAdd } from '@element-plus/icons-vue';
import { ref, toRaw } from 'vue';
const fileState = fileInfoState();
const FolderIcon = FolderAdd
const folderDialogFlag = ref(false)
const addFolder = async () => {
    let data = toRaw(fileState.fileData)
    folderDialogFlag.value = true; 
}

</script>

<style lang="scss"></style>