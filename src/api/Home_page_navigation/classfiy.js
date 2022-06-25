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