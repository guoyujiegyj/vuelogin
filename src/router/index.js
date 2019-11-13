import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  },
  // login页面被保护，通过meta标识。meta为true则表示被保护。
  // 被保护的组件访问时必须登录后才能访问,也就是说，访问时必须携带token。。
  {
    path: '/login',
    component: () => import('../views/Login.vue')

  },
  {
    path: '/about',
    name: 'about',
    // meta表示此组件需要保护。
    meta: {
      auth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

// 全局路由守卫，
router.beforeEach((to, from, next) => {
  // 如果要跳转的组件需要token认证。
  if (to.meta.auth) {
    // 获取token，
    let token = localStorage.getItem('token')
    // 如果没有token值
    if (!token) {
      next({
        // 跳转到login页。因为需要登录,只有登录才能获取token。
        path: '/login',
        query: {redirect: to.path}
      })
    } else {
      next()
    }
  }else{
    next()
  }
})
export default router
