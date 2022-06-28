import request from '../utils/request.js'
//参数 username,password
export function login(data){
    return request({
        url:'/user/login',
        method:'post',
        data:{
            ...data,
        }
    })
}