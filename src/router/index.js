import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resultado from '../views/Resultado.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/perfil',
    name: 'perfil',
    component: () => import('../views/Perfil.vue')
  },{
    path: '/teste/:tipo',
    name: 'teste',
    component: () => import('../views/Teste.vue')
  },{
    path: '/selecao',
    name: 'selecao',
    component: () => import('../views/Selecao.vue')
  },{
    path: '/resultado',
    name: 'resultado',
    component: Resultado
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("concorda") && to.name != 'home'){
      next({name:'home'})
  } else {
    next()
  }  
})

export default router
