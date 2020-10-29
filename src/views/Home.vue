<template>
  <div class="home">       
    <h1>{{ l.titulo }}</h1>    
    <img src="../../images/cyber.jpg" class="img-fluid" :alt="l.image_alt"/> 
    <h3>{{ l.sub_titulo }}</h3>
    <p>{{ l.descricao }}</p>
    <p>{{ l.frase_confirmar }}</p>
    <button type="button" class="btn btn-primary" v-on:click="concordou">{{ l.butao }}</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created(){
    localStorage.lang = navigator.language    
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
.home{
  margin: 50px;
}

img {
  max-height: 300px;
}

p {
  margin: 5%;
}

h1 {
  margin-bottom: 25px;
}

h3 {
  margin: 5%;
}
</style>
