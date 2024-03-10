import { createApp } from 'vue'
import pinia from "./stores/pinia"
import './style.css'
import App from './App.vue'
import router from "./routes/routes.ts";
import vuetify from "./vuetify/vuetify.ts";

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
