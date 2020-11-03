<template>
  <div class="espiao">
    espiao <br/>
    <button type="button" class="btn btn-info col-6" v-on:click="selecionar('sim')"> Sim </button>
    <button type="button" class="btn btn-info col-6" v-on:click="selecionar('naums')"> Naum </button>
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
