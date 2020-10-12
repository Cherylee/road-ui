import Mock from 'mockjs'
// 随机数
let num1 = 0.12
let num2 = 0.12
let num3 = 0.12
let num4 = 0.12
let num5 = 0.12
let realData = {
  "data": [{
    name: '传感器1',
    site: num1,
    time: '2012-12-12',
    changeSite: '0.12',
    situation: '666'
  }, {
    name: '传感器2',
    site: num2,
    time: '2012-12-12',
    changeSite: '0.12',
    situation: '666'
  }, {
    name: '传感器3',
    site: num3,
    time: '2012-12-12',
    changeSite: '0.12',
    situation: '666'
  }, {
    name: '传感器4',
    site: num4,
    time: '2012-12-12',
    changeSite: '0.12',
    situation: '666'
  }, {
    name: '传感器5',
    site: num5,
    time: '2012-12-12',
    changeSite: '0.12',
    situation: '666'
  }]
}
setInterval(() => {
  realData.data[0]['site'] = parseFloat(Math.random() * 1).toFixed(2)
  realData.data[1]['site'] = parseFloat(Math.random() * 1).toFixed(2)
  realData.data[2]['site'] = parseFloat(Math.random() * 1).toFixed(2)
  realData.data[3]['site'] = parseFloat(Math.random() * 1).toFixed(2)
  realData.data[4]['site'] = parseFloat(Math.random() * 1).toFixed(2)
}, 1000)

// mock测试数据
const roadInfo = {
  "data": {
    info: {
      "description": "xxxx公路系统",
      "bridgeNum": 10,
      "tunnelNum": 20,
      "monitoringPointNum": 5,
      "sensor": 2,
    },
    sensor: {
      "legendData": ["在线", "异常"],
      "xAxisData": ["1月", "4月", "7月", "10月"],
      "series": [{
          name: "在线",
          data: [4.3, 2.5, 3.2, 3.6],
        },
        {
          name: "异常",
          data: [2.3, 4.5, 4.3, 2.3],
        },
      ],
    },
    car: {
      "legendData": ["小型车", "中型车", "大型车"],
      "xAxisData": ["1月", "4月", "7月", "10月"],
      "series": [{
          name: "小型车",
          data: [4.3, 2.5, 3.2, 3.6],
        },
        {
          name: "中型车",
          data: [2.3, 4.5, 4.3, 2.3],
        },
        {
          name: "大型车",
          data: [2, 4, 3.2, 3.9],
        },
      ],
    },

  },
}

let sensorRealData = {
  "rows": [{
    id: 'id123545522124',
    num: 2,
    code: 'DGJ1023',
    name: '传感器001',
    site: num1,
    time: '2012-12-12',
    changeSite: '0.12',
    situation: '666',
    wgsH: '102.25',
    wgsX: '102.25',
    wgsY: '102.25',
    wgsHmm: '102.25',
    wgsXmm: '102.25',
    wgsYmm: '102.25'
  }, {
    id: 'id123545522124',
    num: 3,
    code: 'DGJ1023',
    name: '传感器001',
    site: num2,
    time: '2012-12-12',
    changeSite: '0.12',
    situation: '666',
    wgsH: '102.25',
    wgsX: '102.25',
    wgsY: '102.25',
    wgsHmm: '102.25',
    wgsXmm: '102.25',
    wgsYmm: '102.25'
  }, {
    id: 'id123545522124',
    num: 3,
    code: 'DGJ1023',
    name: '传感器001',
    site: num3,
    time: '2012-12-12',
    changeSite: '0.12',
    situation: '666',
    wgsH: '102.25',
    wgsX: '102.25',
    wgsY: '102.25',
    wgsHmm: '102.25',
    wgsXmm: '102.25',
    wgsYmm: '102.25'
  }, {
    id: 'id123545522124',
    num: 5,
    code: 'DGJ1023',
    name: '传感器001',
    site: num4,
    time: '2012-12-12',
    changeSite: '0.12',
    situation: '666',
    wgsH: '102.25',
    wgsX: '102.25',
    wgsY: '102.25',
    wgsHmm: '102.25',
    wgsXmm: '102.25',
    wgsYmm: '102.25'
  }, {
    id: 'id123545522124',
    num: 4,
    code: 'DGJ1023',
    name: '传感器001',
    site: num5,
    time: '2012-12-12',
    changeSite: '0.12',
    situation: '666',
    wgsH: '102.25',
    wgsX: '102.25',
    wgsY: '102.25',
    wgsHmm: '102.25',
    wgsXmm: '102.25',
    wgsYmm: '102.25'
  }],
  "total": 5
}
setInterval(() => {
  realNum(['site', 'num', 'wgsH', 'wgsX', 'wgsY', 'wgsHmm', 'wgsXmm', 'wgsYmm'], sensorRealData.rows)
  // realID(['code', 'id'], sensorRealData.rows)
  realTime(['time'], sensorRealData.rows)
  // realName('name', sensorRealData.rows,'传感器')
}, 1000)

const sensorHistoryData=sensorRealData

const time = ['2020-10-10', '2020-2-25', '2020-5-6']
// 随机数
function realNum(name, array) {
  for (let i = 0; i < name.length; i++) {
    for (let index = 0; index < array.length; index++) {
      array[index][name[i]] = parseFloat(Math.random() * 1).toFixed(2)
    }
  }

}
// 唯一ID
function realID(name, array) {
  for (let i = 0; i < name.length; i++) {
    for (let index = 0; index < array.length; index++) {
      array[index][name[i]] = Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36)
    }
  }

}
// 随机时间
function realTime(name, array) {
  for (let i = 0; i < name.length; i++) {
    for (let index = 0; index < array.length; index++) {
      array[index][name[i]] = time[Math.floor((Math.random() * time.length))]
    }
  }
}
// 随机传感器名称
function realName(name, array, text) {
  for (let index = 0; index < array.length; index++) {
    array[index][name] = text+parseInt(Math.random() * 100)
  }
}


export default ({
  mock
}) => {
  if (!mock) return;
  // 公路基本信息
  Mock.mock(RegExp('/roadInfo'), 'post', () => {
    return roadInfo;
  });
  // 传感器实时数据---首页
  Mock.mock(RegExp('/realData'), 'post', () => {
    return realData;
  });
  // 不同传感器实时数据
  Mock.mock(RegExp('/system/sensor/realData'), 'get', () => {
    return sensorRealData;
  });
  // 不同传感器历史数据
  Mock.mock(RegExp('/system/sensor/historyData'), 'get', () => {
    return sensorHistoryData;
  });
}
