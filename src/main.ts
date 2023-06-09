import { createApp } from 'vue'
import router from './router/index'
import './style.css'
import 'scss-flex'
import App from './App.vue'
const app = createApp(App)

app.use(router).mount('#app')