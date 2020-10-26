import request from '@/utils/request'

// 查询实时数据
export function listSensorReal(query) {
  return request({
    url: '/health/sensor/realData',
    method: 'get',
    params: query
  })
}
// 查询历史数据
export function listSensorHistory(query) {
    return request({
      url: '/health/sensor/historyData',
      method: 'get',
      params: query
    })
  }
// 查询预警数据
export function listSensorWarning(query) {
  return request({
    url: '/health/sensor/warningData',
    method: 'get',
    params: query
  })
}
// 视频监控
export function videoSurveillance(query) {
  return request({
    url: '/health/sensor/videoSurveillance',
    method: 'post',
    params: query
  })
}