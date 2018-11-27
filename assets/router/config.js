export default [
  {
    name: '首页',
    templete: '/',
    icon: 'el-icon-menu'
  },
  {
    name: '导航一',
    icon: 'el-icon-menu',
    children: [
      {
        name: '选项一',
        templete: '/oneInterface'
      }
    ]
  },
  {
    name: '导航二',
    icon: 'el-icon-menu',
    children: [
      {
        name: '选项一',
        templete: '/twoInterface'
      }
    ]
  },
  {
    name: '导航三',
    icon: 'el-icon-menu',
    children: [
      {
        name: '选项一',
        templete: '/ThreeInterface/threeInterface'
      }
    ]
  },
  {
    name: '导航四',
    icon: 'el-icon-menu',
    children: [
      {
        name: '选项一',
        templete: '/fourInterface'
      }
    ]
  },
  {
    name: '导航五',
    icon: 'el-icon-menu',
    children: [
      {
        name: '选项一',
        templete: '/fiveInterface'
      }
    ]
  }
]
