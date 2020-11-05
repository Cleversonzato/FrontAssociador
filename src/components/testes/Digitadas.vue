<template>
  <div class="teste-digitadas">

    <div class="form-group form-check">
        <input type="text" class="form-check-input" v-on:click="evento" id='p1'>
        <label class="form-check-label">{{ l.p1 }}</label>
    </div>


    {{ l.mensagem }}
    <button type="button" class="btn btn-info col-6" v-on:click="finalizar"> {{ l.botao }} </button>
  </div>
</template>

<script>
export default {
  name: 'Digitadas',
  mounted(){
    this.iniciar()
  },
  methods:{
      iniciar(){
        this.tempoInicial = new Date().getTime()
      },
      evento(evento){
        const id = evento.target.id
        const tempo = new Date().getTime()-this.tempoInicial
        const sel = evento.target.checked
        const palavra = this.$data.palavras[id]
        
        palavra.tempo = tempo
        palavra.sel = sel
        
        this.$emit('evento', {'id_palavra': id, 'seleção': sel, 'tempo':tempo})  
      },
      finalizar(){
        this.$emit('finalizar', this.palavras)
      }
  },
  data(){
    return{
      tempoInicial:0
    }  
  }
}
</script>
