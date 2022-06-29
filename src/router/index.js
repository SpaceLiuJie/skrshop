import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
   {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/home.vue'),
  }, {
    path: '/search/:searItem',
    name: 'Search',
    component: () => import('@/views/search/index.vue'),


  }, {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/Signup',
    name: 'signup',
    component: () => import('../views/signup/index.vue'),
  },
  {
    path: '/pop',
    name: 'Pop',
    component: () => import('../views/pop/index.vue'),
  },
  , {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/index.vue'),
  },  {
    path: '/mypage',
    name: 'Mypage',
    component: () => import('@/views/mypage/MyPage.vue'),
  }, {
    path: '/coupon',
    name: 'Coupon',
    component: () => import('@/views/mypage/coupon/index.vue'),
  },{
    path: '/exclusive',
    name: 'Exclusive',
    component: () => import('@/views/home/TopRight/exclusive.vue'),
  }, {
    path: '/event',
    name: 'Event',
    component: () => import('@/views/home/TopRight/event.vue'),
  }, {
    path: '/pop',
    name: 'Pop',
    component: () => import('@/views/home/TopRight/pop.vue'),
  }, {
    path: '/twolevl/:twolevlDetail',
    name: 'Twolevl',
    component: () => import('@/views/home/twolevl.vue'),

  }, {
    path: '/shopCar',
    name: 'ShowCar',
    component: () => import('@/views/shopCar/index.vue'),

  },{
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/views/detail/index.vue'),

  },{
    path: '/shopCar',
    name: 'ShopCar',
    component: () => import('@/views/shopCar/index.vue'),
   
  },{
    path: '/payTotal',
    name: 'PayTotal',
    component: () => import('@/views/paytotal/index.vue'),
   
  },
]


const router = new VueRouter({
  routes,
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router