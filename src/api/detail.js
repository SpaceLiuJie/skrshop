import request from '../utils/request.js'
 
export function gainShopDetail(id){
    return  request({
        method: "post",
        url: "/store/getSpu",
        data: {
            id,
        }
    })
}