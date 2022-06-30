import request from '../utils/request.js'
//参数 username,password
export function   getTopswiper(){
    return request({
        url:'/type/getSwiper',
        method:'post',
       
    })
}