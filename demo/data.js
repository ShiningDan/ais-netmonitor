/**
 * links 的数据格式
 * [
 *   {
 *      path: [[200, 300], [200, 400], [300, 600]],
 *      from: '迪拜',
 *      to: '新加坡',
 *      status: 'good',
 *      bandwidth: 100
 *   }
 * ]
 * 
 */

export const links = [
  {
    path: [[2148, 1028], [2420, 1424]],
    from: '香港',
    to: '悉尼',
    status: 'good',
    bandwidth: 1000001
  },
  {
    path: [[2054, 1170], [2220, 1420], [2420, 1424]],
    from: '新加坡',
    to: '悉尼',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[2054, 1170], [2240, 1170], [2349, 900]],
    from: '新加坡',
    to: '东京',
    status: 'good',
    bandwidth: 0.1,
  },
  {
    path: [[2054, 1170], [2148, 1028]],
    from: '新加坡',
    to: '香港',
    status: 'good',
    bandwidth: 10000,
  },
  {
    path: [[2349, 900], [2260, 1028], [2148, 1028]],
    from: '东京',
    to: '香港',
    status: 'good',
    bandwidth: 0.1,
  },
  {
    path: [[2054, 1170], [1968, 1170], [1875, 1030]],
    from: '新加坡',
    to: '孟买',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[1298, 762], [1350, 762], [1399, 695]],
    from: '伦敦',
    to: '法兰克福',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[1298, 762], [1378, 659], [1628, 659]],
    from: '伦敦',
    to: '莫斯科',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[1298, 762], [1270, 792], [732, 792]],
    from: '伦敦',
    to: '艾斯本',
    status: 'warnning',
    bandwidth: 10000,
  },
  {
    path: [[440, 870], [537, 792], [732, 792]],
    from: '圣何塞',
    to: '艾斯本',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[440, 870], [744, 540], [2024, 540], [2196, 954]],
    from: '圣何塞',
    to: '上海',
    status: 'good',
    bandwidth: 1000001,
  },
  {
    path: [[732, 792], [880, 600], [2006, 600], [2196, 954]],
    from: '艾斯本',
    to: '上海',
    status: 'destroy',
    bandwidth: 100,
  },
  {
    path: [[732, 792], [890, 632], [1924, 632], [2148, 1028]],
    from: '艾斯本',
    to: '香港',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[732, 792], [956, 1380]],
    from: '艾斯本',
    to: '圣保罗',
    status: 'good',
    bandwidth: 0.1,
  },
  {
    path: [[1298, 762], [1594, 1268], [2002, 1268], [2054, 1170]],
    from: '伦敦',
    to: '新加坡',
    status: 'good',
    bandwidth: 0.1,
  },
  {
    path: [[2196, 954], [2090, 808], [1474, 808], [1399, 695]],
    from: '上海',
    to: '法兰克福',
    status: 'good',
    bandwidth: 0.1,
  },
  {
    path: [[1734, 976], [1904, 1238], [1990, 1238], [2054, 1170]],
    from: '迪拜',
    to: '新加坡',
    status: 'warnning',
    bandwidth: 100,
  },
  {
    path: [[1734, 976], [1768, 1002], [2116, 1002], [2148, 1028]],
    from: '迪拜',
    to: '香港',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[2196, 954], [2208, 980], [2088, 1170], [2054, 1170]],
    from: '上海',
    to: '新加坡',
    status: 'good',
    bandwidth: 100,
  },
]

/**
 * citys 的数据格式
 * 
 */

export const citys = [
  {
    name: '圣何塞',
    EnglishName: 'San Jose',
    position: [440, 870],
    titleRelativePosition: ['0px', '20px'],
  },
  {
    name: '艾斯本',
    EnglishName: 'Ashburn',
    position: [732, 792],
    titleRelativePosition: ['0px', '20px'],
  },
  {
    name: '圣保罗',
    EnglishName: 'San Paulo',
    position: [956, 1380],
    titleRelativePosition: ['0px', '20px'],
  },
  {
    name: '伦敦',
    EnglishName: 'London',
    position: [1298, 762],
    titleRelativePosition: ['0px', '20px'],
  },
  {
    name: '法兰克福',
    EnglishName: 'Frankfurt',
    position: [1399, 695],
    titleRelativePosition: ['0px', '20px'],
  },
  {
    name: '莫斯科',
    EnglishName: 'Moscow',
    position: [1628, 659],
    titleRelativePosition: ['20px', '-10px'],
  },
  {
    name: '迪拜',
    EnglishName: 'Dubai',
    position: [1734, 976],
    titleRelativePosition: ['20px', '-30px'],
  },
  {
    name: '孟买',
    EnglishName: 'Mumbai',
    position: [1875, 1030],
    titleRelativePosition: ['0px', '20px'],
  },
  {
    name: '新加坡',
    EnglishName: 'Singapore',
    position: [2054, 1170],
    titleRelativePosition: ['0px', '20px'],
  },
  {
    name: '香港',
    EnglishName: 'HongKong',
    position: [2148, 1028],
    titleRelativePosition: ['0px', '20px'],
  },
  {
    name: '上海',
    EnglishName: 'Shanghai',
    position: [2196, 954],
    titleRelativePosition: ['20px', '-20px'],
  },
  {    name: '东京',
    EnglishName: 'Tokyo',
    position: [2349, 900],
    titleRelativePosition: ['20px', '-10px'],
  },
  {
    name: '悉尼',
    EnglishName: 'Sydney',
    position: [2420, 1424],
    titleRelativePosition: ['20px', '-10px'],
  },
  
]