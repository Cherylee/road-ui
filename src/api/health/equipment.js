import request from '@/utils/request'

// 获取播放地址
export function getOpenAddress(id) {
  return request({
    url: 'bridge/machine/getOpenAddress/' + id,
    method: 'get'
  })
}
// 根据id获取设备信息
export function getMachineInfo(id) {
  return request({
    url: 'bridge/machine/' + id,
    method: 'get'
  })
}
