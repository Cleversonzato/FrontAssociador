<template>
  <div class="home">       
    <h1>{{ l.titulo }}</h1>    
    <img :src="require('../../images/exercicio_'+imagem+'.png')" class="img-fluid" :alt="l.image_alt" />    
    <h3>{{ l.sub_titulo }}</h3>
    <div class="home-body">
      <div>{{ l.descricao }}</div>
      <br/>
      <div>{{ l.dados }}</div>
    </div>
    <div class="final">
      {{ l.frase_confirmar }}
    </div>    
    <button type="button" class="btn btn-success final" v-on:click="concordou">{{ l.botao }}</button>           
  </div>
</template>

<script>
export default {
  name: 'Home',
  beforeCreate(){
    const q_lang = this.$route.query.lang
    if(q_lang != null){
      localStorage.lang = q_lang
    }else{
      localStorage.lang = navigator.language
    }
  },
  data(){
    return{
      imagem : (Math.floor(Math.random() * 10) + 1)
    }
  },
  methods:{
    concordou(){
      localStorage.concorda = true;
      this.$router.push('perfil')
    }
  }
}
</script>

<style scoped>
.home-body{
  text-align: justify;
}

img {
  max-height: 300px;
}

h1 {
  margin-bottom: 30px;
}

h3 {
  margin: 7%;
}

.final{
    margin-top: 5%;
}

</style>
