<template>
    <el-dialog class="setting-dialog" v-model="flag" :show-close="!1" title="编辑个人档案">
        <div class="form-item">
            <el-form class="setting-form" label-position="top" >
                <el-form-item label="测试">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="主题模式">
                    <ThemeSwitch />
                </el-form-item>
                <el-form-item label="登出">
                </el-form-item>
            </el-form>

        </div>
    </el-dialog>
</template>

<script setup>
import { defineProps, ref, defineModel } from 'vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import LogoutButton from '@/components/Dashboard/Header/HeaderComponents/LogoutButton.vue';
const flag = defineModel('visible', { type: Boolean, default: false });

</script>

<style lang="scss">
.setting-dialog {
    width: 500px;
    // display: flex;

    // justify-content: center;
    .form-item {
        width: 100%;
        display: flex;
        justify-content: center;
        .setting-form {
            width: 80%;
        }
    }
}
</style>