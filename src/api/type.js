import request from "@/utils/request.js";

export function getImg(option) {
    // id
    return request({
        url: '/type/getImg',
        method: 'post',
        data: {
            ...option,
        }
    })
}