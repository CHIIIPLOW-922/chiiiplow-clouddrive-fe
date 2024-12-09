<template>
    <div class="login">
        <el-button @click="test"></el-button>
        <el-button @click="toggleTheme">
      切换到 {{ isDark ? 'Light' : 'Dark' }} 模式
    </el-button>
    </div>
</template>

<script setup>
import MessageUtils from '@/utils/MessageUtils';
import { useTheme } from '@/theme/useTheme';

const { isDark, toggleTheme } = useTheme();
const test = () => {
    MessageUtils.success("123123");
}
</script>

<style scoped>
</style>