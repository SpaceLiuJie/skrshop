import request from '../utils/request.js'
//参数 username,password,email
export function register(data){
    return request({
        url:'/user/register',
        method:'post',
        data:{
            ...data,
        }
    })
}