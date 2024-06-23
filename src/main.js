import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import 'animate.css/animate.min.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.mount('#app')

