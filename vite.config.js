import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8999,
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://192.168.194.52:30080/clouddrive',
        changeOrigin: true, // 修改请求头的 Host 为目标服务器的 URL
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
})
