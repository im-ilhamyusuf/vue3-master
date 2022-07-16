import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// tabler theme
import '@tabler/core/dist/js/tabler.min.js'
import '@tabler/core/dist/css/tabler.min.css'

// icon
import IconHome from '@/components/icon/Home.vue'
import IconApps from '@/components/icon/Apps.vue'

const app = createApp(App)

app.component('icon-home', IconHome)
app.component('icon-apps', IconApps)

app.use(router).mount('#app')
