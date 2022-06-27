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
<<<<<<< HEAD

}, {
  path: '/login',
  name: 'Login',
  component: () => import('../views/login/index.vue'),
}, , {
=======
}, {
>>>>>>> 43cf76b1918c1b29de4be482ce67f858847357c4
  path: '/mypage',
  name: 'Mypage',
  component: () => import('@/views/mypage/MyPage.vue'),
}, {
  path: '/coupon',
  name: 'Coupon',
  component: () => import('@/views/mypage/coupon/index.vue'),
<<<<<<< HEAD
}, {
  path: '/event',
  name: 'Event',
  component: () => import('@/views/home/TopRight/event.vue'),
}, {
  path: '/exclusive',
  name: 'Exclusive',
  component: () => import('@/views/home/TopRight/exclusive.vue'),
=======
>>>>>>> 43cf76b1918c1b29de4be482ce67f858847357c4
}]

const router = new VueRouter({
  routes,
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router