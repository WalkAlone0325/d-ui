import {
  RouteRecordRaw,
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'Button',
    path: '/components/Button',
    component: () => import('../packages/Button/docs/README.md'),
    meta: {
      title: '按钮'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    if (to.path !== from.path) {
      return { top: 0 }
    }
  }
})

export default router
