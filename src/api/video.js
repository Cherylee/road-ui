import request from '@/utils/request1'
// 云台操作
export function start(query) {
    return request({
      url: '/api/lapp/device/ptz/start',
      method: 'post',
      params: query
    })
  }
