
/**
 * 获取去商品列表 
 * 
 */
 import request from "@/utils/request.js";
 // 搜索请求

 export function searchShopList(word){
    // 注意: 执行getShopList时候,返回值是promise
    // promise有:
    // 1:promiseStatus: 记录任务状态
    // 2:promiseValue 存放服务响应的数据
    return request({
        url:'/wares/getSpu',
        method:'post',
        data:{'name': word}
    })
}




