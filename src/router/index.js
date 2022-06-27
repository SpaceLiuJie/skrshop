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
},{
  path: '/search/:searItem',
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
}
,{
  path: '/twolevl/:twolevlDetail',
  name: 'Twolevl',
  component: () => import('@/views/home/twolevl.vue'),
 
}
]


const router = new VueRouter({
  routes,
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router