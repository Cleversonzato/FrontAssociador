<template>
  <div class="resultado">       
    <h1>{{ l.titulo }}</h1>    
    {{ resultado }}

    {{ l.agradecimento }}
  </div>
</template>

<script>
export default {
  name: 'Resultado',
  data(){
    return{      
      resultado: this.$route.query.resultado,
    }
  }
}
</script>