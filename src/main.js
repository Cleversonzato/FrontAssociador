import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import local from '../locales/local'

createApp(App)
    .use(router)
    .mixin({
        data(){return {
            lang: local(this.$route.query.lang)
        }}
    })
    .mount('#app')
