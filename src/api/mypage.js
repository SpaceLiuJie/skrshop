import http from '../utils/request.js'

// 修改用户信息
export function getUser(data) {
    return http({
        url: '/user/updateUserInfo',
        method: 'post',
        params: {
            ...data
        }
    })
}

//获取二级标题
export async function getSpu(data) {
    return await http({
        method: "post",
        url: "/wares/getSecond",
        data: {
            ...data
        }
    })
}

// 修改密码
export async function updatePassword(options) {
    return await http({
        method: 'post',
        url: '/user/changePassword',
    })
}

// 获取优惠券
export async function getVoucher(data) {
    return await http({
        method: "post",
        url: "/voucher/getVoucher",
        data: {
            ...data
        }
    })
}


// 删除优惠券
export async function deletVoucher(data) {
    return await http({
        method: "post",
        url: "/voucher/deleteVoucher",
        data: {
            ...data
        }
    })
}

// 获取地址
export async function getAddress(data) {
    return await http({
        method: "post",
        url: "/user/deleteAddress",
        data: {
            ...data
        }
    })
}




export async function getUserOrder(customer_id) {
    return await http({
        method: "post",
        url: "/order/getUserOrder",
        data: {
            ...customer_id
        }
    })
}