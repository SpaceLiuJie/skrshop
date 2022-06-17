import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home',
}, {
  path: '/home',
  name: 'Home',
  component: () => import('@/pages/home/index.vue'), // @/ 表是src地址
}, {
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/login/index.vue')
}, {
  path: '/register',
  name: 'Register',
  component: () => import('@/pages/register/index.vue')
}, {
  path: '/shopcar',
  name: 'ShopCar',
  component: () => import('@/pages/shopCar/index.vue')
}, {
  path: '/detail/:id/:type_one',
  name: 'Detail',
  component: () => import('@/pages/detail/index.vue')
}, {
  path: "/search",
  name: "Search",
  component: () => import('@/pages/search/index.vue')
}]

const router = new VueRouter({
  routes,
  // linkActiveClass:'caijinp', //更改标签名
})

export default router