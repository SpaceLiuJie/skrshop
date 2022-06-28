import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/sass/common.scss'
import './assets/less/a.less'
import './assets/less/global.less'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import ShopItem from '@/components/shopItem/index.js'
Vue.use(ShopItem);

Vue.config.productionTip = false

Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')