import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [{{ routes }}]

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
