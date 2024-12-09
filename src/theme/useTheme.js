import { ref, computed } from 'vue';

export function useTheme() {
  const theme = ref('light'); // 默认主题

  const isDark = computed(() => theme.value === 'dark');

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    const html = document.documentElement;
    if (isDark.value) {
      html.classList.add('dark'); // 添加暗黑模式类
    } else {
      html.classList.remove('dark'); // 移除暗黑模式类
    }
  };

  return { theme, isDark, toggleTheme };
}
