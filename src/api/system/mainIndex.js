import request from '@/utils/request'

// 查询登录日志列表
export function roadInfo() {
  return request({
    url: '/roadInfo',
    method: 'post'
  })
}
// 实时数据
export function realData() {
  return request({
    url: '/realData',
    method: 'post'
  })
}