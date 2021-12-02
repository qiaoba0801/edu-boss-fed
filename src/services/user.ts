/**
 * 关于用户请求方法
 */

import request from '@/utils/request'
import qs from 'qs'

// 定义类型
interface user {
  phone: string
  password: string
}

export const login = (data: user) => {
  return request({
    method: 'POST',
    url: '/front/user/login',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}
