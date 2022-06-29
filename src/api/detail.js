import request from '../utils/request.js'
 
//id
export function gaingetSpuDetail(id){
    return  request({
        method: "post",
        url: "/store/getSpu",
        data: {
            id,
        }
    })
}
//id
export function gaingetSkuDetail(spu_id){
    return  request({
        method: "post",
        url: "/store/getSku",
        data: {
            spu_id,
        }
    })
}