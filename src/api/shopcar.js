/**
 * 获取购物车列表
 * 
 */
import request from "@/utils/request.js";
 
//参数: 用户id
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
 
 // 增加
 export function addShopCar(option) {
     //customer_id
     return request({
         url: '/shopCar/addShopCar',
         method: 'post',
         data: {
             ...option,
         }
     })
 }

//  增加订单
export function addOrder(option) {
    // store_id, customer_id, money, skus, code
    return request({
        url: '/order/addOrder',
        method: 'post',
        data: {
            ...option,
        }
    })
}

// 跳转支付宝
export function payOrder(option) {
    // store_id, customer_id, money, skus, code
    return request({
        url: '/order/payOrder',
        method: 'post',
        data: {
            ...option,
        }
    })
}

// dddd
// 更新订单
export function updateOrder(option) {
    // store_id, customer_id, money, skus, code
    return request({
        url: '/order/updateOrder',
        method: 'post',
        data: {
            ...option,
        }
    })
}

// dddd
// 获取订单
export function getOrder(option) {
    // sstore_id, page, count
    return request({
        url: '/order/getOrder',
        method: 'post',
        data: {
            ...option,
        }
    })
}