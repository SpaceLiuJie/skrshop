import request from '../utils/request.js'

// 获取商品详情
export function getDetail(goodId) {
    return request({
        url: "/api/detail",
        method: "get",
        params: {
            goodId,
        }
    })
}

// 获取相关商品
export function getShopList(type_one) {
    return request({
        url: " /api/goodList",
        method: "get",
        params: {
            type_one,
        }
    })
}