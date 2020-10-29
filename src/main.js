import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import local from '../locales/local'


createApp(App)
    .use(router)
    .mixin(local)
    .mount('#app')
