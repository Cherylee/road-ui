import request from '@/utils/request'


// 查询事故处理数据
export function accidentList() {
  return request({
    url: 'system/traffic/dataStatistics',
    method: 'get'
  })
}
// 实时数据
export function realData() {
  return request({
    url: '/realData',
    method: 'post'
  })
}
// 查询健康系统
export function healthInfo() {
  return request({
    url: '/healthInfo',
    method: 'post'
  })
}
// 查询边坡岩土系统
export function slopeInfo() {
  return request({
    url: '/slopeInfo',
    method: 'post'
  })
}
// 查询视频监控
export function videoInfo() {
  return request({
    url: '/videoInfo',
    method: 'post'
  })
}
// 交通安全设施撞击预警
export function safeInfo() {
  return request({
    url: '/safeInfo',
    method: 'post'
  })
}
// 路侧智能交互预警
export function intelligenceInfo() {
  return request({
    url: '/intelligenceInfo',
    method: 'post'
  })
}