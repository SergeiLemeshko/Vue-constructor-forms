import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/listforms',
    name: 'listforms',
    component: () => import('../views/FormsView.vue')
  },
  {
    path: '/authorization',
    name: 'authorization',
    component: () => import('../views/AuthorizationView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateFormView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
