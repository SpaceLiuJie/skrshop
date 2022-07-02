import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/sass/common.scss'
import './assets/less/a.less'
import './assets/less/global.less'
import store from './store'

import 'swiper/css/swiper.css'
// import 'swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

import ShopItem from '@/components/shopItem/index.js'
import AddressForm from '@/components/addressForm/index.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Bus from '@/utils/bus.js'
Vue.use(ShopItem);
Vue.use(AddressForm);

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$bus = Bus


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')