<template>
  <div class="theme-switch">
    <el-switch 
      class="el-theme-switch" 
      v-model="isDark" 
      @change="toggleTheme" 
      :active-icon="MoonIcon"
      :inactive-icon="SunnyIcon" 
      :inline-prompt="true">
    </el-switch>
  </div>
</template>

<script setup>
import { Sunny, Moon } from '@element-plus/icons-vue';
import { ref, onMounted, watch } from 'vue';
const SunnyIcon = Sunny;
const MoonIcon = Moon;
const isDark = ref(false);

const toggleTheme = () => {
  if (isDark.value) {
    changeTheme('dark')
  } else {
    changeTheme('light')
  }
}

const changeTheme = (theme) => {

    const html = document.documentElement;
    if (theme == "dark") {
      html.classList.add('dark'); // 添加暗黑模式类
    } else {
      html.classList.remove('dark'); // 移除暗黑模式类
    }
}

// 初始化主题（判断本地存储）
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  isDark.value = savedTheme === 'dark'
  changeTheme(savedTheme)
})

// 监听主题变化，保存到本地存储
watch(isDark, (newValue) => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
})
</script>


<style>
.el-theme-switch {
  --el-switch-off-color: #A4A4A4;
  --el-switch-on-color: #585858;
}
</style>