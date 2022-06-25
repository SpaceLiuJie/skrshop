
/**
 * 获取购物车列表
 * 
 */
 import request from "@/utils/request.js";
 // 搜索请求

 export function getShopCar(data){
// id
    return request({
        url:'/shopcar/getShopCar',
        method:'post',
        params:{
            ...data,
        }
    })
}



