import Vue from 'vue'
import Vuex from 'vuex'
import {
    get,
    set,
    remove,
    clear,
} from '../utils/localStrage.js'
import {
    login
} from '../api/login.js'
import shopcarSet from './modules/shopcarSet.js'
import addAddress from './modules/addAddress'

Vue.use(Vuex)
let user = get('user') || {} //请求浏览器本地存储user数据

let store = new Vuex.Store({
    state: {
        user,
    },
    mutations: {
        SETUSER(state, data) {
            state.user = data;
        },
        REMOVEUSER(state) {
            state.user = {};
            // remove(user);
            clear();
        },
    },
    actions: {
        setUser(store, data) {
            // console.log(data);
            return login(data).then((data) => {
                // console.log('login ryn 123');
                if (data.code == 200) {
                    let user = {
                        token: data.data.token,
                        username: data.data.userInfo.username,
                        customer_id:data.data.userInfo.id,
                    }
                    set("user", JSON.stringify(user));
                    store.commit('SETUSER', user)
                }
                return data
            })
            // store.commit('SETUSER', data);
        },
        removeuser(store) {
            // console.log('removeuser yun');
            store.commit('REMOVEUSER')
        },
    },
    modules: {
        shopcarSet,
        addAddress,
    }
})
export default store;

/**
 * 使用vuex 流程
 * 1:在state中初始化数据, 并创建actionh和mutaion函数
 * 3: 在组件中 通过this.$store.dispatch 触发 action函数
 * 4: 在action中 通过 store.comit 触发mution函数
 * 5: 在mutionh中 通过state.xx 更改数据
 * ----> 完成修改过程
 */