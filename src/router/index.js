import {
   createRouter,
   createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
   path: '/',
   name: 'dasbor',
   component: HomeView
}, ]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
   linkActiveClass: 'active'
})

export default router