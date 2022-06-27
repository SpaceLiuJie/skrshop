import request from '../../utils/request.js'
// 一级分类
export function onefiyAdd(data) {
    return request({
        url: "/type/getParentName",
        method: "post",
        data: {
            data,
        }
    })
}
// 二级分类
export function twofiyAdd(data) {
    return request({
        url: "/wares/getSecond",
        method: "post",
        data: {
            data,
        }
    })
}
// 获取一级商品列表
export function onefiyAddDetail(data) {
    return request({
        url: "/type/getproduct",
        method: "post",
        data: {
            data,
        }
    })
}
// 获取二级商品列表
export function twofiyAddDetail(name) {
    return request({
        url: "/wares/getSpu",
        method: "post",
        data: {
            name,
        }
    })
}