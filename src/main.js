import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/sass/common.scss'
import './assets/less/a.less'

// 引入elementui组件
import ElementUI from 'element-ui';
// 导入elementui组件样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// 在vue项目中使用elementui插件
Vue.use(ElementUI);

/**
 * vue.use()
 * 参数: Function | object.install
 * Function 形参:是vue构造函数
 * object 必须要 install函数形参赋值:Vue函数
 *
 * 作用:使用第三方vue插件npm, yarn安装的包都是第三方的
 */

// vue.use(function(app){  // install函数
// console.log( app);
// })

// vue.use({
//   install(vue) {
//     console.log('obj-----------------');
//     console.log(Vue);
//     vue.component()
//     vue.use()
//     vue.directive(),
//       vue.observable()
//     vue.mixin()
//   }
// })

// 导入自定义全局组件
import ShopItem from './components/shopItem'
Vue.use(ShopItem)

import backTop from './components/backTop/index.js'
Vue.use(backTop)


import MagnifyingGlass from './components/magnifyingGlass/index.js'
Vue.use(MagnifyingGlass)


import './permisstion.js'

new Vue({
  router,
  store, //产生原型属性$store this.$store
  render: h => h(App)
}).$mount('#app')