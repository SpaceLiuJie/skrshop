import request from '../utils/request'

/**
 * 获取商品列表
 * @param {String} page 第几页
 * @returns
 */
export function getShopList(page) {
    // 注意:执行getShopList时候,返回值是promise
    // promise有:
    // 1:promiseStatus:记录任务状态
    // 2:promiseValue存放服务响应的数据
    return request({
        url: '/api/goodList',
        method: 'get',
        params: {
            page,
        }
    })
}