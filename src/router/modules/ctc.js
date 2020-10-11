export default [
  {
    label: '新闻管理',
    name: 'news',
    path: '/news',
    meta: { parent: 'ctc', title: 'news' },
    component: resolve => require(['@/views/ctc/news'], resolve)
  },
  {
    label: '新闻编辑',
    name: 'editnews',
    path: '/editnews',
    parents: 'ctc',
    meta: { parent: 'ctc', title: 'editnews' },
    component: resolve => require(['@/views/ctc/edit'], resolve)
  }
]