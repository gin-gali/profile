import {createRouter, createWebHistory } from 'vue-router'
import Top from '../components/pages/Top.vue'
import NotFound from '../components/pages/NotFound.vue'

const routes = [
  { path: '/', name: 'top', component: Top },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
