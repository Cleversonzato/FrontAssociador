<template>
  <div class="ouro-perdido">
    ouro perdido
    <button type="button" class="btn btn-info col-6" v-on:click="selecionar('sim')"> Sim </button>
    <button type="button" class="btn btn-info col-6" v-on:click="selecionar('naums')"> Naum </button>
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
