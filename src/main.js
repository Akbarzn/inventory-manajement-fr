import { createApp } from 'vue'
import App from './App.vue'
import  'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.min.js'
import router from './router'
import { createPinia } from 'pinia'
import './assets/style/global.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
// import axios from 'axios'
createApp(App).use(router).use(createPinia()).use(router).mount('#app')
