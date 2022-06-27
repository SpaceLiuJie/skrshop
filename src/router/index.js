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
 
},{
  path: '/twolevl/:twolevlDetail',
  name: 'Twolevl',
  component: () => import('@/views/home/twolevl.vue'),
 
}
]

const router = new VueRouter({
  routes,
})

export default router