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