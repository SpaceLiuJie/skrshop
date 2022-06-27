<<<<<<< HEAD
import axios from "axios";
import { Loading } from 'element-ui'
// import Vue from 'vue';
// import {set} from './localStrage'
// import store from '../store/index.js'
// import router from '../router/index.js'
let instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL, //配置请求的根路径
    timeout: 10000, //5s后没有响应认为事变
=======
import axios from 'axios'
// import store from '../store/index'

// import {
//   Loading,
//   Message
// } from 'element-ui'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 2000
>>>>>>> 43cf76b1918c1b29de4be482ce67f858847357c4
})
  //第一种
// let load = null;
  //第二种
let loadServe = null;

<<<<<<< HEAD
// 注意:只有instan发送的请求才会触发下面的拦截器

// 请求拦截，请求发送之前执行
instance.interceptors.request.use((config) => {
    // config请求报文配置项目
    // ......这里可以修改每个请求的配置
    // .......一般用于配置统一请求

    //第一种
    // load = Vue.prototype.$loading({
    //     lock: true,
    //     text: 'Loading',
    //     spinner: 'el-icon-loading',
    //     background: 'rgba(0, 0, 0, 0.7)',
    // })

    // 第二种
    loadServe = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    console.log('config',config);
    return config //发送请求，如果没有return 会停止发送请求
})
// 响应拦截器,服务器做出响应后,组件收到响应之前执行.
instance.interceptors.response.use(config => {
    // config 响应报文
    console.log('%c服务器响应的数据', 'font-size:20px')
    console.log(config.data);
    if(config.data.code === 200){
        loadServe.close();
        // console.log('1234611511555');
        // console.log(config.data.data);
        return config.data;
    }
    else{
        setTimeout(()=>{
            // load.close()
            // 关闭loading
            loadServe.close();
        },1000)
        // ...统一拦截响应状态.处理不同状态
        return config.data //retrun服务器响应的数据
    }
},
(err) => {
    // 超过5s后没有响应,或者链接中出现问题都会执行
    console.log(`<span style="display:inline-block;padding='10px 25px';color: '#fff';background:'red'">出错了>>></span>`, err);
    return err
}
=======
// let loadServe = null;

instance.interceptors.request.use(config => {
  console.log('---------123----------', config);
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
    console.log('%c服务器响应的数据', 'font-size:14px;color:#000;background-color:greenYellow;padding:5px 15px;')
    console.log(response.data);
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
>>>>>>> 43cf76b1918c1b29de4be482ce67f858847357c4
)

export default instance

// export let serve = axios.create({
//     baseURL: process.env.VUE_APP_BASE_URL_LK
// })

// 需要拦截器在做拦截器。


// export let ghy = axios.create({
//     baseURL: process.env.VUE_APP_BASE_URL_GHY
// })
