<template>
  <div class="perfil">       
    <h1>Dados demográficos:</h1>
    <smal>Todos os dados são auto declaratórios de respostas abertas:</smal>
    Data de nascimento:
    Sexo:
    Raça:
    Escolaridade:
    Nacionalidade:
    Local de residência:

    Já preenchi todo o que precisava, <button type="button" class="btn btn-primary" v-on:click="iniciar_pesquisa">vamos lá!</button>

  </div>
</template>

<script>
export default {
  name: 'Perfil'
}
</script>

<style scoped>
.perfil{
  margin: 50px;
}


</style>
