import axios from "axios";
import {
  Loading
} from 'element-ui'
// import Vue from 'vue';
// import {set} from './localStrage'
// import store from '../store/index.js'
// import router from '../router/index.js'
let instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, //配置请求的根路径
  timeout: 10000, //5s后没有响应认为事变
})
//第一种
// let load = null;
//第二种
let loadServe = null;

// let loadServe = null;

instance.interceptors.request.use(config => {
  // console.log('---------123----------', config);
  // 懒加载
  // loadServe = Loading.service({
  //   lock: true,
  //   text: 'Loading',
  //   spinner: 'el-icon-loading',
  //   background: 'rgba(0, 0, 0, 0.7)',
  // })
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  //   store.dispatch('commitLoading', true)
  return config
})

instance.interceptors.response.use(response => {
    // console.log('%c服务器响应的数据', 'font-size:14px;color:#000;background-color:greenYellow;padding:5px 15px;')
    // console.log(response.data);
    //   setTimeout(() => {
    //     store.dispatch('commitLoading', false)
    //   }, 500);
    // setTimeout(() => {
    //   loadServe.close();
    // }, 500)
    return response.data
  },
  error => {
    // console.log(error)
    // store.dispatch('commitLoading', false)
    return new Promise(() => {})
  }
)

export default instance

// export let serve = axios.create({
//     baseURL: process.env.VUE_APP_BASE_URL_LK
// })

// 需要拦截器在做拦截器。


// export let ghy = axios.create({
//     baseURL: process.env.VUE_APP_BASE_URL_GHY
// })