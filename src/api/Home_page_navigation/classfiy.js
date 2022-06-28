import request from '../../utils/request.js'
// 一级分类
//参数:无
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
//参数:parent_name  非必选 一级菜单名
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
//参数:parent_name  一级分类名

export function onefiyAddDetail(parent_name) {
    return request({
        url: "/type/getproduct",
        method: "post",
        data: {
            parent_name,
        }
    })
}
// 获取二级商品列表
//参数:name  二级分类名

export function twofiyAddDetail(name) {
    return request({
        url: "/wares/getSpu",
        method: "post",
        data: {
            name,
        }
    })
}