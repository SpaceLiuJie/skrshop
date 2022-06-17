import axios from "axios";
// 第一种：懒加载
// import Vue from 'vue';

// 第二种：懒加载
import {
    Loading
} from 'element-ui'


let instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL, //配置请求的根路径
    timeout: 5000, //5s后没有响应认为事变
})

// 第一种：懒加载
// let load = null;

// 第二种：懒加载
let loadServe = null;

// 注意:只有用instance发送的请求才会触发下面的拦截器。

// 请求拦截，请求发送之前执行
instance.interceptors.request.use((config) => {
    // config请求报文配置项目
    // ......这里可以修改每个请求的配置
    // .......一般用于配置统一请求

    // 第一种：懒加载
    // load = Vue.prototype.$loading({
    //     lock: true,
    //     text: 'Loading',
    //     spinner: 'el-icon-loading',
    //     background: 'rgba(0, 0, 0, 0.7)',
    // })

    // 第二种：懒加载
    loadServe = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    return config //发送请求，如果没有return 会停止发送请求
})
// 响应拦截器,服务器做出响应后,组件收到响应之前执行.
instance.interceptors.response.use(config => {
    // config 响应报文
    console.log('%c服务器响应的数据', 'font-size:20px')
    console.log(config.data);
    // ...统一拦截响应状态.处理不同状态
    setTimeout(() => {
        // 第一种：懒加载
        // load.close();

        // 第二种：懒加载
        loadServe.close();
    }, 500)
    return config.data //retrun服务器响应的数据
}, (err) => {
    // 超过5s后没有响应,或者链接中出现问题都会执行
    console.log('%c出错了bug', 'font-size:14px;color:#000;background-color:red;padding:5px 15px;')
    return err
})

export default instance