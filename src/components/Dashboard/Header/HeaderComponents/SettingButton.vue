<template>
    <el-button class="setting-button" @click="openSettingDialog" :icon="SettingIcon" circle />
</template>

<script setup>
import { Setting } from '@element-plus/icons-vue';
import { defineEmits } from 'vue';
const emits = defineEmits(['openSettingDialog'])
const SettingIcon = Setting
const openSettingDialog = () => {
    emits('open-dialog');
}

</script>

<style lang="scss">
.header-setting {
    // border: 1px solid black;

}
</style>