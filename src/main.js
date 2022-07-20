import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// tabler theme
import '@tabler/core/dist/js/tabler.min.js'
import '@tabler/core/dist/css/tabler.min.css'

// form
import FormColumn from '@/components/form/Column.vue'
import FormBasic from '@/components/form/Basic.vue'

// icon
import IconAlert from '@/components/icon/Alert.vue'
import IconApps from '@/components/icon/Apps.vue'
import IconCheck from '@/components/icon/Check.vue'
import IconHome from '@/components/icon/Home.vue'
import IconPlus from '@/components/icon/Plus.vue'
import IconUserSearch from '@/components/icon/UserSearch.vue'

// page title
import PageTitle from '@/components/PageTitle.vue'


// modal
import ModalButton from '@/components/modal/Button.vue'
import ModalBasic from '@/components/modal/Basic.vue'
import ModalSuccess from '@/components/modal/Success.vue'
import ModalDanger from '@/components/modal/Danger.vue'

const app = createApp(App)

// form
app.component('form-column', FormColumn)
app.component('form-basic', FormBasic)

// icon
app.component('icon-alert', IconAlert)
app.component('icon-apps', IconApps)
app.component('icon-check', IconCheck)
app.component('icon-home', IconHome)
app.component('icon-plus', IconPlus)
app.component('icon-user-search', IconUserSearch)

// page
app.component('page-title', PageTitle)

// modal
app.component('modal-button', ModalButton)
app.component('modal-basic', ModalBasic)
app.component('modal-success', ModalSuccess)
app.component('modal-danger', ModalDanger)

app.use(router).mount('#app')
