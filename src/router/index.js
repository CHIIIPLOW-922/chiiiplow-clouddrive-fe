import { createRouter, createWebHashHistory } from 'vue-router'
import MessageUtils from '@/utils/MessageUtils';

const router = createRouter({
  mode: "hash",
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "默认",
      redirect: "/auth"
    },
    {
      path: "/dashboard",
      name: "导航页",
      meta: {
        needLogin: true,
      },
      component: () => import('@/pages/Dashboard/Dashboard.vue')
    }, {
      path: "/auth",
      name: "登录及注册",
      meta: {
        needLogin: false,
      },
      component: () => import("@/pages/Auth/Auth.vue")
    },
    {
      path: "/chat",
      name: "AI聊天",
      meta: {
        needLogin: true,
      },
      component: () => import("@/components/AIChat/AIChat.vue")
    },
    {
      path: "/test",
      name: "测试",
      component: () => import("@/components/Test/Test.vue")
    }
  ]
})
router.beforeEach((to, from, next) => {
  const userInfo = localStorage.getItem("access_token");
  if (to.meta.needLogin != null && to.meta.needLogin && userInfo == null) {
    MessageUtils.error("用户未登录");
    next('/auth');
  }
  if (to.path == '/auth' && userInfo) {
    router.push('dashboard');
  }
  next();
})
export default router