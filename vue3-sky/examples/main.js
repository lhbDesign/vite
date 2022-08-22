import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vue3Sky from 'vue3-sky'
import 'vue3-sky/lib/style.css'
console.log('Vue3Sky',Vue3Sky);
const app = createApp(App)
app.use(Vue3Sky)
app.mount('#app')
