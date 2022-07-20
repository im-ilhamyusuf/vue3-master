import {
   createRouter,
   createWebHistory
} from 'vue-router'

import DasborIndexView from '@/views/Dasbor/IndexView.vue'

const routes = [{
   path: '/',
   name: 'dasbor',
   component: DasborIndexView
},]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
   linkActiveClass: 'active'
})

export default router