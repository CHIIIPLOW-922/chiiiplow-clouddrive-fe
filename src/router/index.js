import { createRouter, createWebHashHistory } from 'vue-router'

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
      component: () => import('@/pages/Dashboard/Dashboard.vue')
    }, {
      path: "/auth",
      name: "登录及注册",
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