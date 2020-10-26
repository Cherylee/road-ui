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

// 首页mainIndex 基础数据-------------------------------------------------------------
const roadInfo = {
  "data": {
    "description": "xxxx公路系统",
    "sensorNum": 105,
    "normalNum": 98,
    "maintainNum": 7,
    "datalist": [{
      'content': '传感器 1xxxxxxxxxx'
    }, {
      'content': '传感器 1xxxxxxxxxx'
    }, {
      'content': '传感器 1xxxxxxxxxx'
    }]
    // car: {
    //   "legendData": ["小型车", "中型车", "大型车"],
    //   "xAxisData": ["1月", "4月", "7月", "10月"],
    //   "series": [{
    //       name: "小型车",
    //       data: [4.3, 2.5, 3.2, 3.6],
    //     },
    //     {
    //       name: "中型车",
    //       data: [2.3, 4.5, 4.3, 2.3],
    //     },
    //     {
    //       name: "大型车",
    //       data: [2, 4, 3.2, 3.9],
    //     },
    //   ],
    // },

  }
}
const safety = {
    "data": [{
      'content': '传感器 1xxxxxxxxxx'
    }, {
      'content': '传感器 1xxxxxxxxxx'
    }, {
      'content': '传感器 1xxxxxxxxxx'
    }]
  }
  

let sensorRealData = {
  "rows": [{
    id: 'id123545522124',
    reason: '超速100公里',
    status: '状态1',
    solve: '建议警示扣分处理',
    num: 22,
    code: 'DGJ1023',
    name: '传感器001',
    deptName: '深海高速厦门段A标',
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
    reason: '超速100公里',
    solve: '建议警示扣分处理',
    status: '状态1',
    num: 22,
    code: 'DGJ1023',
    name: '传感器001',
    deptName: '深海高速厦门段A标',
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
    reason: '超速100公里',
    solve: '建议警示扣分处理',
    status: '状态1',
    num: 22,
    code: 'DGJ1023',
    name: '传感器001',
    deptName: '深海高速厦门段A标',
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
    reason: '超速100公里',
    solve: '建议警示扣分处理',
    status: '状态1',
    num: 22,
    code: 'DGJ1023',
    name: '传感器001',
    deptName: '深海高速厦门段A标',
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
    reason: '超速100公里',
    solve: '建议警示扣分处理',
    status: '状态1',
    num: 22,
    code: 'DGJ1023',
    name: '传感器001',
    deptName: '深海高速厦门段A标',
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

const sensorHistoryData = sensorRealData
const sensorName = ['压力传感器', '距离传感器', '速度传感器']
let shu = 111111
let myDate = '2012-12-12'

setInterval(() => {
  realNum(['code', 'name', 'site', 'num', 'wgsH', 'wgsX', 'wgsY', 'wgsHmm', 'wgsXmm', 'wgsYmm'], sensorRealData.rows)
  // realID(['code', 'id'], sensorRealData.rows)
  realTime(['time'], sensorRealData.rows)
  // realName('name', sensorRealData.rows,'传感器')
  myDate = currentTime()
  shu++
  if (shu > 1000000) {
    shu = 111111
  }
}, 2000)
// 随机数
function realNum(name, array) {
  for (let i = 0; i < name.length; i++) {
    for (let index = 0; index < array.length; index++) {
      if (name[i] == 'wgsH') {
        array[index][name[i]] = parseFloat(35 + Math.random() * 0.01).toFixed(4)
      } else if (name[i] == 'name') {
        array[index][name[i]] = sensorName[Math.floor((Math.random() * sensorName.length))]
      } else if (name[i] == 'code') {
        shu = shu + index
        array[index][name[i]] = 'GBL' + shu
      } else if (name[i] == 'wgsX') {
        array[index][name[i]] = parseFloat(3560009.33 + Math.random() * 0.01).toFixed(4)
      } else if (name[i] == 'wgsY') {
        array[index][name[i]] = parseFloat(373522.76 + Math.random() * 0.01).toFixed(4)
      } else if (name[i] == 'wgsHmm') {
        array[index][name[i]] = parseFloat(48 + Math.random() * 10.1).toFixed(1)
      } else if (name[i] == 'wgsXmm') {
        array[index][name[i]] = parseFloat(750 + Math.random() * 10.1).toFixed(1)
      } else if (name[i] == 'wgsYmm') {
        array[index][name[i]] = parseFloat(390 + Math.random() * 10.1).toFixed(1)
      }

    }
  }

}
// 随机时间
function realTime(name, array) {
  for (let i = 0; i < name.length; i++) {
    for (let index = 0; index < array.length; index++) {
      array[index][name[i]] = myDate
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
// 当前时间
function currentTime() {
  let time = ''
  var date = new Date();
  var year = date.getFullYear(); //获取当前年份  
  var mon = date.getMonth() + 1; //获取当前月份  
  var da = date.getDate(); //获取当前日  
  var day = date.getDay(); //获取当前星期几  
  var h = date.getHours(); //获取小时  
  var m = date.getMinutes(); //获取分钟  
  var s = date.getSeconds(); //获取秒  
  var d = document.getElementById('Date');
  time = year + '-' + mon + '-' + da + ' ' + h + ':' + m + ':' + s
  return time
}
const videoSurveillance = {
  "data": [{
    name: '设备1',
    id: '4',
    key: '0'
  }, {
    name: '设备2',
    id: '4',
    key: '1'
  }, {
    name: '设备3',
    id: '4',
    key: '2'
  }, {
    name: '设备4',
    id: '4',
    key: '3'
  }, {
    name: '设备5',
    id: '4',
    key: '4'
  }]
}


export default ({
  mock
}) => {
  if (!mock) return;
  // 首页------------------------------------------------------------------
  // 基本信息
  // 健康系统
  Mock.mock(RegExp('/healthInfo'), 'post', () => {
    return roadInfo;
  });
  // 边坡岩土系统
  Mock.mock(RegExp('/slopeInfo'), 'post', () => {
    return roadInfo;
  });
  // 视频监控
  Mock.mock(RegExp('/videoInfo'), 'post', () => {
    return roadInfo;
  });
  // 交通安全设施撞击预警
  Mock.mock(RegExp('/safeInfo'), 'post', () => {
    return safety;
  });
  // 路侧智能交互预警
  Mock.mock(RegExp('/intelligenceInfo'), 'post', () => {
    return safety;
  });
  // Mock.mock(RegExp('/accidentList'), 'post', () => {
  //   return accidentList;
  // });
  // 传感器实时数据
  Mock.mock(RegExp('/realData'), 'post', () => {
    return realData;
  });
  // 健康系统---------------------------------------------------------------
  // 实时数据
  Mock.mock(RegExp('/health/sensor/realData'), 'get', () => {
    return sensorRealData;
  });
  // 历史数据
  Mock.mock(RegExp('/health/sensor/historyData'), 'get', () => {
    return sensorHistoryData;
  });
  // 预警数据
  Mock.mock(RegExp('/health/sensor/warningData'), 'get', () => {
    return sensorHistoryData;
  });
  // 视频监控
  Mock.mock(RegExp('/health/sensor/videoSurveillance'), 'post', () => {
    return videoSurveillance;
  });
  // 边坡系统---------------------------------------------------------------
  // 实时数据
  Mock.mock(RegExp('/slope/sensor/realData'), 'get', () => {
    return sensorRealData;
  });
  // 历史数据
  Mock.mock(RegExp('/slope/sensor/historyData'), 'get', () => {
    return sensorHistoryData;
  });
  // 预警数据
  Mock.mock(RegExp('/slope/sensor/warningData'), 'get', () => {
    return sensorHistoryData;
  });
  // 视频监控
  Mock.mock(RegExp('/slope/sensor/videoSurveillance'), 'post', () => {
    return videoSurveillance;
  });
}
