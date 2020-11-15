<template>
  <div class="resultado">    
    <div v-if="resultado == '11'">
      <h1>{{ l.r11 }}</h1>
      <img :src="require('../../images/acerto.png')" class="img-fluid" alt="Imagem de comemoração" />
      <h3>{{ l.r11_comentarios }}</h3>
    </div>
    <div v-if="resultado == '00'">
      <h1>{{ l.r00 }}</h1>
      <img :src="require('../../images/acerto.png')" class="img-fluid" alt="Imagem de comemoração"/>
      <h3>{{ l.r00_comentarios }}</h3>
    </div>
    <div v-if="resultado == '01'">
      <h1>{{ l.r01 }}</h1>
      <img :src="require('../../images/erro.png')" class="img-fluid" alt="Imagem de erro"/>
      <h3>{{ l.r01_comentarios }}</h3>
    </div>
    <div v-if="resultado == '10'">
      <h1>{{ l.r10 }}</h1>
      <img :src="require('../../images/erro.png')" class="img-fluid" alt="Imagem de erro"/>
      <h3>{{ l.r10_comentarios }}</h3>
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