export default [
  {
    label: '生成尺码表',
    name: 'tagSize',
    path: '/tagSize',
    meta: { parent: 'ali', title: 'tagSize' },
    component: resolve => require(['@/views/tagSize'], resolve)
  }
]