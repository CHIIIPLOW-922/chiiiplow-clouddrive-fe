<template>
    <el-button class="logout-button" circle :icon="SwitchButtonIcon" type="danger" plain />
</template>
    

<script setup>
import { SwitchButton } from '@element-plus/icons-vue';
const SwitchButtonIcon = SwitchButton
</script>

<style lang="scss">

</style>