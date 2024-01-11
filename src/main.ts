import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'


// create the app
const app = createApp(App)

app.use(router)


// mount the app
app.mount('#app')
