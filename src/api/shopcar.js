/**
 * 获取购物车列表
 * 
 */
import request from "@/utils/request.js";
// 搜索请求

export function getShopCar(option) {
    // id
    return request({
        url: '/shopcar/getShopCar',
        method: 'post',
        data: {
            ...option,
        }
    })
}

// 删除商品
export function deleteShopCar(option) {
    // id
    return request({
        url: '/shopCar/deleteShopCar',
        method: 'post',
        data: {
            ...option,
        }
    })
}

//添加购物车
export function addShopCar(option) {
    // id
    return request({
        url: '/shopCar/addShopCar',
        method: 'post',
        data: {
            ...option,
        }
    })
}