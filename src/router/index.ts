import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  // 可以在这里添加更多路由
]

const router = createRouter({
  history: createWebHistory('/bocchi_wallpaper/'),
  routes
})

export default router