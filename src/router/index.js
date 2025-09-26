import { createRouter, createWebHashHistory } from 'vue-router'
import MessageUtils from '@/utils/MessageUtils';
import { waitForLoginFinish } from '@/utils/AuthUtils';

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
router.beforeEach(async(to, from, next) => {
  await waitForLoginFinish()
  const userInfo = localStorage.getItem("access_token")
  // 用户未登录，访问需要登录的页面
  if (to.meta.needLogin && !userInfo) {
    MessageUtils.error("用户未登录");
    return next('/auth');
  }

  // 已登录用户访问登录页，重定向到 dashboard
  if (to.path === '/auth' && userInfo) {
    return next('/dashboard'); // 或者 next({ name: 'Dashboard' })
  }

  // 默认情况，正常跳转
  next();
});

export default router