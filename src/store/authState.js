import { reactive } from "vue";
// 定义全局状态
export const authState = reactive({
    isLogin: true, // 默认显示登录组件
  });
  
  // 切换状态的方法
  export function toggleAuth() {
    authState.isLogin = !authState.isLogin;
  }