import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
      {
        meta: { title: '按钮' },
        name: 'Button',
        path: '/components/Button',
        component: () => import('packages/Button/docs/README.md')
      },
      {
        meta: { title: '提示信息' },
        name: 'Message',
        path: '/components/Message',
        component: () => import('packages/Message/docs/README.md')
      },
      {
        meta: { title: '测试' },
        name: 'Test',
        path: '/components/Test',
        component: () => import('packages/Test/docs/README.md')
      }]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from) {
    if (to.path !== from.path) {
      return { top: 0 }
    }
  }
})

export default router
