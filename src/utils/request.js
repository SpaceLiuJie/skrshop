import axios from 'axios'
// import store from '../store/index'

// import {
//   Loading,
//   Message
// } from 'element-ui'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 2000
})

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
)

export default instance