<template>
  <div class="espiao">
    <div>
      Espião
      <iframe width="560" height="315" src="https://www.youtube.com/embed/RuTMTz-KF5M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <button type="button" class="btn btn-danger col-6" v-on:click="selecionar('sim')"> Sim </button>
    <button type="button" class="btn btn-danger col-6" v-on:click="selecionar('naums')"> Naum </button>
  </div>
</template>

<script>
export default {
  name: 'Espiao',
  methods:{
      selecionar(selecao){
        this.$emit('iniciar', {'historia': 'Espião','selecao': selecao});
      }
  }
}
</script>
