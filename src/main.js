import { createApp } from 'vue'
import App from './App.vue'
import  'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.min.js'
import router from './router'
import { createPinia } from 'pinia'
import { createPiniaMiddleware } from './plugins/piniaMiddleware'
import piniaPersistedstate  from 'pinia-plugin-persistedstate'
import './assets/style/global.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
// import axios from 'axios'

// const app = createApp(App)
// app.use(pinia)
// app.use(router)
// app.mount('#app')
createApp(App).use(router).use(createPinia()).use(router).mount('#app')

const pinia = createPinia()
pinia.use(createPiniaMiddleware)
pinia.use(piniaPersistedstate)