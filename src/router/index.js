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
    path: '/pop',
    name: 'Pop',
    component: () => import('../views/pop/index.vue'),
  },
  , {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/index.vue'),
  },  {
    // 个人中心
    path: '/mypage',
    name: 'Mypage',
    component: () => import('@/views/mypage/MyPage.vue'),
  }, {
    // 优惠券页面
    path: '/coupon',
    name: 'Coupon',
    component: () => import('@/views/mypage/coupon/index.vue'),
  },{
    // exclusive页面
    path: '/exclusive',
    name: 'Exclusive',
    component: () => import('@/views/home/TopRight/exclusive.vue'),
  }, {
    // event页面
    path: '/event',
    name: 'Event',
    component: () => import('@/views/home/TopRight/event.vue'),
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
   
  }, {
    // 关于我们
    path: '/about',
    name: 'About',
    component: () => import('@/views/home/footerNav/aboutus.vue'),
  }, {
    // 营销联盟
    path: '/partner',
    name: 'Alliances',
    component: () => import('@/views/home/footerNav/alliances.vue'),
  }, {
    // 服务条款
    path: '/terms',
    name: 'Conditions',
    component: () => import('@/views/home/footerNav/conditions.vue'),
  }, {
    // 隐私政策
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/home/footerNav/Privacy.vue'),
  }, {
    // 咨询服务
    path: '/advisory',
    name: 'Consultancy',
    component: () => import('@/views/home/footerNav/consultancy.vue'),
  }, {
    // 服务中心
    path: '/serviceCenter',
    name: 'Severcenter',
    component: () => import('@/views/home/footerNav/severcenter.vue'),
  }, {
    // 招聘信息
    path: '/offers',
    name: 'Employment',
    component: () => import('@/views/home/footerNav/employment.vue'),
  }, {
    // 全球的
    path: '/global',
    name: 'Error',
    component: () => import('@/views/home/footerNav/error.vue'),
  },
  {
    path: '/paySuccess',
    name: 'PaySuccess',
    component: () => import('@/views/paySuccess/PaySuccess.vue'),
  },
  {//best页面
    path: '/myBest',
    name: 'MyBest',
    component: () => import('@/views/best/MyBest.vue'),
  },
  {//onefiy页面
    path: '/onefiy/:typeone',
    name: 'Onefiy',
    component: () => import('../views/onefiy/onefiy.vue'),
  },
]


const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active',
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router