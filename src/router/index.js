import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  mode: "hash",
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "默认路径",
    //   // component: () => import('@/views/frame/Frame.vue')
    //   redirect: "/frame"
    // },
    {
      path: "/login",
      name: "登录",
      component: () => import('@/pages/Auth/Login.vue'),
    },{
      path: "/register",
      name: "注册",
      component: () => import('@/pages/Auth/Register.vue')
    },{
      path: "/dashboard",
      name: "导航页",
      component: () => import('@/pages/Dashboard/Dashboard.vue')
    },{
      path: "/auth",
      name: "auth页面",
      component: () => import("@/pages/Auth/Auth.vue")
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   const userInfo = localStorage.getItem("jwt");
//   if (to.meta.needLogin != null && to.meta.needLogin && userInfo == null) {
//     router.push("/login");
//   }
//   next();
// })
export default router