import ShopItem from './ShopItem.vue'
import VueLazy from 'vue-lazyload';
import loading from '@/assets/images/loading.gif'

export default {
    install(Vue) {
        Vue.use(VueLazy, {
            loading, //预处理图地址
        })
        // 注册全局组件
        // ShopItem.name 获取 ShopItem.vue 中name属性的赋值
        // 作用：组件名
        Vue.component(ShopItem.name, ShopItem);
    }
}