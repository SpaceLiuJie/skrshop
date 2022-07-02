// 获取图片   {parent_name:'服饰',start:16,end:18}
import http from '../utils/request.js'
// export const getImg = (options) => http.post('/type/getImg', options)

export function getImg(data) {
    return http({
        method: "post",
        url: "/type/getImg",
        data: {
            ...data
        }
    })
}