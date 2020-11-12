<template>
  <div class="resultado">    
    <div v-if="resultado == 'vv'">
      <h1>{{ l.vv }}</h1>
      <img src="/images/acerto.png" class="img-fluid" alt="Imagem de comemoração" />
      <h3>{{ l.vv_comentarios }}</h3>
    </div>
    <div v-if="resultado == 'vf'">
      <h1>{{ l.vf }}</h1>
      <img src="/images/acerto.png" class="img-fluid" alt="Imagem de comemoração"/>
      <h3>{{ l.vf_comentarios }}</h3>
    </div>
    <div v-if="resultado == 'fv'">
      <h1>{{ l.fv }}</h1>
      <img src="/images/erro.png" class="img-fluid" alt="Imagem de erro"/>
      <h3>{{ l.fv_comentarios }}</h3>
    </div>
    <div v-if="resultado == 'ff'">
      <h1>{{ l.ff }}</h1>
      <img src="/images/erro.png" class="img-fluid" alt="Imagem de erro"/>
      <h3>{{ l.ff_comentarios }}</h3>
    </div>
  </div>
  <dados/>
  <router-link to="/final"><button class="btn btn-success final">{{ l.proximo }}</button> </router-link>   
</template>

<script>
import Dados from '../components/Dados'
export default {
  name: 'Resultado', 
   components: {      
      'dados': Dados
   },
  data(){
    return{
      resultado: this.$route.query.resultado
    }
  }
}
</script>

<style scoped>
img{
  margin: 5%;
}
</style>