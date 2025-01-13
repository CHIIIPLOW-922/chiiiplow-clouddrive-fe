<template>
    <div id="app">
        <el-config-provider :locale="locale">
            <router-view />
        </el-config-provider>

    </div>
</template>



<script setup>
import { ElConfigProvider } from 'element-plus';
import { onMounted } from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
const locale = zhCn
onMounted(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    const html = document.documentElement;
    if (savedTheme == "dark") {
        html.classList.add('dark'); // 添加暗黑模式类
    } else {
        html.classList.remove('dark'); // 移除暗黑模式类
    }
})
</script>


<style scoped></style>
