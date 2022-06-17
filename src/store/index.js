import Vue from 'vue'
import Vuex from 'vuex'
import {
  get,
  set
} from '../utils/localStrage.js'
import {
  login
} from '../api/login.js'

Vue.use(Vuex)
let user = get('user') || {}
export default new Vuex.Store({
  // 一般情况： state下有几个键值对，就有几个mutations和actions函数。
  // 特殊情况：state中某个值 只读，不修改，不需要mutations actions
  state: {
    user,
  },
  mutations: {
    SETUSER(state, data) {
      /**
       * state 是 vuex中响应式数据
       * data 执行函数时候传入的实参
       */
      state.user = data;
    },
    REMOVEUSER(state) {
      state.user = {}
    }
  },
  actions: {
    setUser(store, data) {
      // store.commit('SETUSER', data)
      /**
       * store 是 vuex实例对象
       * store.commit()
       * 作用: 触发mutation中函数
       * 参一: mutaions中函数名
       * 参二:给执行函数传入实参
       */
      return login(data).then((data) => {
        if (data.code == 1) {
          let user = {
            token: data.token,
            username: data.username
          }
          set("user", JSON.stringify(user));
          store.commit('SETUSER', user)
        }
      });
    },
    removeuser(store) {
      store.commit('REMOVEUSER')
    }
  },
  modules: {}
})

/**
 * 使用vuex 流程
 * 1:在state中初始化数据, 并创建actionh和mutaion函数
 * 3: 在组件中 通过this.$store.dispatch 触发 action函数
 * 4: 在action中 通过 store.comit 触发mution函数
 * 5: 在mutionh中 通过state.xx 更改数据
 * ----> 完成修改过程
 */