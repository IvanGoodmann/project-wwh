import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    component: () => import('../views/Auth/Auth.vue'),
    children: [
      {
        path: '/',
        name: 'login',
        component: () => import('../views/Auth/Login.vue')
      },
      {
        path: '/password/restore',
        name: 'passwordRestore',
        component: () => import('../views/Auth/Restore.vue')
      },
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/offers',
    name: 'Offers',
    component: () => import('../views/Offers.vue')
  },
  {
    path: '/streams',
    name: 'Streams',
    component: () => import('../views/Streams.vue')
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('../views/Statistics.vue')
  },
  {
    path: '/instruments',
    name: 'Instruments',
    component: () => import('../views/Instruments.vue')
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import('../views/Tickets.vue')
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('../views/FAQ.vue')
  },
  {
    path: '/finance',
    name: 'Finance',
    component: () => import('../views/Finance.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
