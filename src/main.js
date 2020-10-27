import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

router.afterEach((from) => {
    if(!localStorage.getItem("concorda") && from.name != 'home'){
        router.push({name:'home'})
    }
  })