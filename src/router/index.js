import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/perfil',
    name: 'perfil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Perfil.vue')
  },{
    path: '/teste',
    name: 'teste',
    component: () => import('../views/Teste.vue')
  },{
    path: '/selecao',
    name: 'selecao',
    component: () => import('../views/Selecao.vue')
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
