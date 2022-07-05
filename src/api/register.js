import request from '../utils/request.js'
// 注册请求
//参数 username,password,email
export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data: {
      ...data,
    }
  })
}
//   发送验证码
export async function getMessage(data) {
  return await request({
    method: 'post',
    url: '/user/getMessage',
    data: { ...data, }
  })
}