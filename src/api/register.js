import request from '../utils/request.js'

export function register(user) {
    return request({
        url: '/api/register',
        method: 'get',
        params: {
            ...user, //...展开运算符，获欣user所有的key-value 添加到 params中
        }
    })
}