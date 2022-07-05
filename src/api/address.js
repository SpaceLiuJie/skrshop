import request from "@/utils/request.js";


export function getUserAddress(option) {
    // customer_id
    return request({
        url: '/user/getAddress',
        method: 'post',
        data: {
            ...option,
        }
    })
}

// 新增地址
// customer_id, name, tel, address, prime
export function addUserAddress(option) {
    return request({
        url: '/user/addAddress',
        method: 'post',
        data: {
            ...option,
        }
    })
}

//设置为默认地址
// id, prime, customer_id
export function setDefaultAddress(option) {
    return request({
        url: '/user/defaultAddress',
        method: 'post',
        data: {
            ...option,
        }
    })
}
export function delAddress(option) {
    return request({
        url: '/user/deleteAddress',
        method: 'post',
        data: {
            ...option,
        }
    })
}