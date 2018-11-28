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
        templete: '/oneInterface',
        icon: 'el-icon-menu'
      }
    ]
  },
  {
    name: '导航二',
    icon: 'el-icon-menu',
    children: [
      {
        name: '选项一',
        templete: '/twoInterface',
        icon: 'el-icon-menu'
      }
    ]
  },
  {
    name: '导航三',
    icon: 'el-icon-menu',
    children: [
      {
        name: '选项一',
        templete: '/ThreeInterface/threeInterface',
        icon: 'el-icon-menu'
      }
    ]
  },
  {
    name: '导航四',
    icon: 'el-icon-menu',
    children: [
      {
        name: '选项一',
        templete: '/fourInterface',
        icon: 'el-icon-menu'
      }
    ]
  },
  {
    name: '导航五',
    icon: 'el-icon-menu',
    children: [
      {
        name: '选项一',
        templete: '/fiveInterface',
        icon: 'el-icon-menu'
      }
    ]
  }
]
