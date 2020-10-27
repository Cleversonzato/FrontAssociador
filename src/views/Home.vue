<template>
  <div class="home">       
    <h1>Você consegue enganar o IAssociador?</h1>    
    <img src="../../images/cyber.jpg" class="img-fluid" alt="Imagem de título"/> 
    <h3>Seja bem vindo(a) à este site de pesquisa sobre associações e testes!</h3>
    <p>
      Esta é uma pesquisa sobre associação e verificação de comportamento com relação à interação com o computador.
      Nenhum dado é de preenchimento obrigatório e nenhuma de identificação é armazenado e todas as informações são obtidas com o objetivo de construir um perfil para a pesquisa.
      E a IA fica mais esperta com o tempo.
    </p>
    <p> Sabendo disso, você concorda e deseja continuar neste experimento? </p>
    <button type="button" class="btn btn-primary" v-on:click="concordou">Concordo</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
