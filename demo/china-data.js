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
    path: [[1335, 344], [1647, 344], [1761, 258]],
    from: '呼和浩特',
    to: '张北',
    status: 'error',
    bandwidth: 1000001
  },
  {
    path: [[1761, 258], [1730, 383]],
    from: '张北',
    to: '北京',
    status: 'good',
    bandwidth: 10000,
  },
  {
    path: [[1761, 258], [1880, 316], [1880, 868], [2035, 997]],
    from: '张北',
    to: '上海',
    status: 'good',
    bandwidth: 0.1,
  },
  {
    path: [[1335, 344], [1372, 383], [1730, 383]],
    from: '呼和浩特',
    to: '北京',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[1335, 344], [1372, 383], [1730, 383]],
    from: '呼和浩特',
    to: '北京',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[1730, 383], [2020, 555], [2020, 622]],
    from: '北京',
    to: '青岛',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[1730, 383], [2020, 555], [2020, 622]],
    from: '北京',
    to: '青岛',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[1335, 344], [1654, 1090], [1962, 1090]],
    from: '呼和浩特',
    to: '杭州',
    status: 'good',
    bandwidth: 1000001,
  },
  {
    path: [[1335, 344], [1654, 1090], [1962, 1090]],
    from: '呼和浩特',
    to: '杭州',
    status: 'warnning',
    bandwidth: 1000001,
  },
  {
    path: [[1730, 383], [1855, 507], [1855, 878], [2035, 997]],
    from: '北京',
    to: '上海',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[1730, 383], [1825, 507],[1826, 878], [1962, 1090]],
    from: '北京',
    to: '杭州',
    status: 'good',
    bandwidth: 10000,
  },
  {
    path: [[1730, 383], [1794, 507],[1794, 1213], [1487, 1402]],
    from: '北京',
    to: '深圳',
    status: 'good',
    bandwidth: 100,
  },
  {
    path: [[1962, 1090], [2140, 1090], [2140, 708], [2020, 622]],
    from: '杭州',
    to: '青岛',
    status: 'good',
    bandwidth: 0.1,
  },
  {
    path: [[1962, 1090], [2035, 997]],
    from: '杭州',
    to: '上海',
    status: 'good',
    bandwidth: 10000,
  },
  {
    path: [[1962, 1090], [1962, 1237], [1487, 1402]],
    from: '杭州',
    to: '深圳',
    status: 'good',
    bandwidth: 1000001,
  },
  {
    path: [[2035, 997], [2035, 1306], [1487, 1402]],
    from: '上海',
    to: '深圳',
    status: 'good',
    bandwidth: 1000001,
  },
  {
    path: [[1487, 1402], [1525, 1557], [1588, 1557]],
    from: '深圳',
    to: '香港',
    status: 'good',
    bandwidth: 1000,
  },
]

/**
 * citys 的数据格式
 * 
 */

export const citys = [
  {
    name: '呼和浩特',
    EnglishName: 'Huhehaote',
    position: [1335, 344],
    titleRelativePosition: ['-160px', '-24px'],
  },
  {
    name: '张北',
    EnglishName: 'Zhangbei',
    position: [1761, 258],
    titleRelativePosition: ['40px', '-76px'],
  },
  {
    name: '北京',
    EnglishName: 'Beijing',
    position: [1730, 383],
    titleRelativePosition: ['-80px', '16px'],
  },
  {
    name: '青岛',
    EnglishName: 'Qingdao',
    position: [2020, 622],
    titleRelativePosition: ['-90px', '0px'],
  },
  {
    name: '上海',
    EnglishName: 'Shanghai',
    position: [2035, 997],
    titleRelativePosition: ['-24px', '-110px'],
  },
  {
    name: '杭州',
    EnglishName: 'Hangzhou',
    position: [1962, 1090],
    titleRelativePosition: ['-100px', '20px'],
  },
  {
    name: '深圳',
    EnglishName: 'Shenzhen',
    position: [1487, 1402],
    titleRelativePosition: ['-140px', '-20px'],
  },
  {
    name: '香港',
    EnglishName: 'Hongkong',
    position: [1588, 1557],
    titleRelativePosition: ['40px', '-32px'],
  }
]