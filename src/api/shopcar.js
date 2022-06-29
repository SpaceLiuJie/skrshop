/**
 * 获取购物车列表
 * 
 */
 import request from "@/utils/request.js";
 // 搜索请求
 
 export function getShopCar(option) {
     // id
     return request({
         url: 'http://127.0.0.1:3000/shopcar/getShopCar',
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
         url: 'http://127.0.0.1:3000/shopCar/deleteShopCar',
         method: 'post',
         data: {
             ...option,
         }
     })
 }
 
 // 增加
 export function addShopCar(option) {
     // id
     return request({
         url: 'http://127.0.0.1:3000/shopCar/addShopCar',
         method: 'post',
         data: {
             ...option,
         }
     })
 }