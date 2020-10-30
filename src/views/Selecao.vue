<template>
  <div class="selecao">
    <h1>{{ l.titulo }}</h1>
    <div>
         <button type="button" class="btn btn-success" v-on:click="selecionar('opcoes')"> opcoes </button>
         <button type="button" class="btn btn-success" v-on:click="selecionar('porcentagens')"> porcentagens </button>
         <button type="button" class="btn btn-success" v-on:click="selecionar('digitadas')"> digitadas </button>
    </div>
    <div class="opcoes" ref="opcoes">
        opcoes
    </div>
    <div class="porcentagens" ref="porcentagens">
        porcentagens
    </div>
    <div class="digitadas" ref="digitadas">
        escrito
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selecao',
  methods:{
      selecionar(tipo){
          console.log(this.$refs)
          console.log(this.$refs[tipo])
      }
  }

}
</script>

<style scoped>
.porcentagens{
    visibility: visible;
}
.opcoes{
    visibility: hidden;
}
.digitadas{
    visibility: hidden;
}

</style>