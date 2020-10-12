import request from '@/utils/request'

// 查询实时数据
export function listSensorReal(query) {
  return request({
    url: '/system/sensor/realData',
    method: 'get',
    params: query
  })
}
// 查询历史数据
export function listSensorHistory(query) {
    return request({
      url: '/system/sensor/historyData',
      method: 'get',
      params: query
    })
  }