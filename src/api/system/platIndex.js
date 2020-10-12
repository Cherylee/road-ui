import request from '@/utils/request'
// 登录验证
export const getPlatIndex = (query) => {
    return request({
      url: '/auth/loginFromPlat',
      method: 'get',
      params: query
    })
  }