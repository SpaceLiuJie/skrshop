import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home',
}, {
  path: '/home',
  name: 'Home',
  component: () => import('../views/home/index.vue'),
}, {
  path: '/search',
  name: 'Search',
  component: () => import('@/views/search/index.vue'),

}, {
  path: '/login',
  name: 'Login',
  component: () => import('../views/login/index.vue'),
}, , {
  path: '/mypage',
  name: 'Mypage',
  component: () => import('@/views/mypage/MyPage.vue'),
}, {
  path: '/coupon',
  name: 'Coupon',
  component: () => import('@/views/mypage/coupon/index.vue'),
}, {
  path: '/event',
  name: 'Event',
  component: () => import('@/views/home/TopRight/event.vue'),
}, {
  path: '/exclusive',
  name: 'Exclusive',
  component: () => import('@/views/home/TopRight/exclusive.vue'),
}]

const router = new VueRouter({
  routes,
})

export default router