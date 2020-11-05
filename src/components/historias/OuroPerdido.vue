<template>
  <div class="ouro-perdido">
    <div>
      ouro
      <iframe width="560" height="315" src="https://www.youtube.com/embed/RuTMTz-KF5M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div id="player"></div>
    </div>
    <button type="button" class="btn btn-warning col-6" v-on:click="selecionar('pegar')"> Pegar </button>
    <button type="button" class="btn btn-warning col-6" v-on:click="selecionar('deixar')"> Deixar </button>
  </div>
</template>

<script>
export default {
  name: 'OuroPerdido',
  methods:{
      selecionar(selecao){
        this.$emit('iniciar', {'historia': 'Ouro perdido','selecao': selecao});
      }
  }
}
</script>
