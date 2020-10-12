import request from '@/utils/request'

// 查询设备列表
export function listMachine(query) {
  return request({
    url: '/system/machine/list',
    method: 'get',
    params: query
  })
}

// 查询设备详细
export function getMachine(id) {
  return request({
    url: '/system/machine/' + id,
    method: 'get'
  })
}

// 新增设备
export function addMachine(data) {
  return request({
    url: '/system/machine',
    method: 'post',
    data: data
  })
}

// 修改设备
export function updateMachine(data) {
  return request({
    url: '/system/machine',
    method: 'put',
    data: data
  })
}

// 删除设备
export function delMachine(id) {
  return request({
    url: '/system/machine/' + id,
    method: 'delete'
  })
}
