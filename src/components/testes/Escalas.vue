<template>
  <div class="teste-escalas">

    {{ l.mensagem }}
    <button type="button" class="btn btn-info col-6" v-on:click="finalizar"> {{ l.botao }} </button>
  </div>
</template>

<script>
export default {
  name: 'Escalas',
  mounted(){
    this.iniciar()
  },
  methods:{
      iniciar(){
      },
      evento(evento){
        
        this.$emit('evento', {evento})  
      },
      finalizar(){
        this.$emit('finalizar', this.palavras)
      }
  },
  data(){
    return{
      tempoInicial:0,
    }  
  }
}
</script>
