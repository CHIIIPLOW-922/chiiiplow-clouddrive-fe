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
import { useTheme } from '@/theme/useTheme';
import { Sunny, Moon } from '@element-plus/icons-vue';
const { isDark, toggleTheme } = useTheme();
const SunnyIcon = Sunny;
const MoonIcon = Moon;
</script>


<style>
.el-theme-switch {
  --el-switch-off-color: #A4A4A4;
  --el-switch-on-color: #585858;
}
</style>