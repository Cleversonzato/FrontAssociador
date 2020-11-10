<template>
  <div class="teste-opcoes">
    <div class="col-12 area-teste">
      <div class="form-check-inline col-sm-12 col-md-3 col-lg-3 col-xl-3" v-for="(value, name) in palavras" :key="value" >
          <input type="checkbox" class="form-check-input" v-on:click="evento" v-model="value.selecao" :id="name">
          <label class="form-check-label" :for="name">{{ l[name] }} </label>
      </div>
    </div>
    <div>
      {{ l.mensagem }}
      <br/>
    </div>
    <button type="button" class="btn btn-info col-6" v-on:click="finalizar"> {{ l.botao }} </button>
  </div>
</template>

<script>
export default {
  name: 'Opcoes',
  props:['inicio'],
  methods:{
      evento(evento){   
        const id = evento.target.id
        const palavra = this.$data.palavras[id]        
        
        palavra.tempo = new Date().getTime()- this.inicio
        this.$emit('evento', {'id_palavra': id, 'seleção': !palavra.selecao, 'tempo_milisegundo': palavra.tempo})  
      },
      finalizar(){
        const tempo = new Date().getTime()- this.inicio
        this.$emit('finalizar', {'tempo_total_milisegundos': tempo, 'palavras':this.palavras})
      }
  },
  data(){
    return{
      palavras:{
        p1:{selecaoecao:false, tempo:0},
        p2:{selecao:false, tempo:0},
        p3:{selecao:false, tempo:0},
        p4:{selecao:false, tempo:0},
        p5:{selecao:false, tempo:0},
        p6:{selecao:false, tempo:0},
        p7:{selecao:false, tempo:0},
        p8:{selecao:false, tempo:0},
        p9:{selecao:false, tempo:0},
        p10:{selecao:false, tempo:0},
        p11:{selecao:false, tempo:0},
        p12:{selecao:false, tempo:0},
        p13:{selecao:false, tempo:0},
        p14:{selecao:false, tempo:0},
        p15:{selecao:false, tempo:0},
        p16:{selecao:false, tempo:0},
        p17:{selecao:false, tempo:0},
        p18:{selecao:false, tempo:0},
        p19:{selecao:false, tempo:0},
        p20:{selecao:false, tempo:0},
        p21:{selecao:false, tempo:0},
        p22:{selecao:false, tempo:0},
        p23:{selecao:false, tempo:0},
        p24:{selecao:false, tempo:0},
        p25:{selecao:false, tempo:0},
        p26:{selecao:false, tempo:0},
        p27:{selecao:false, tempo:0},
        p28:{selecao:false, tempo:0},
        p29:{selecao:false, tempo:0},
        p30:{selecao:false, tempo:0},
        p31:{selecao:false, tempo:0},
        p32:{selecao:false, tempo:0},
        p33:{selecao:false, tempo:0},
        p34:{selecao:false, tempo:0},
        p35:{selecao:false, tempo:0},
        p36:{selecao:false, tempo:0},
        p37:{selecao:false, tempo:0},
        p38:{selecao:false, tempo:0},
        p39:{selecao:false, tempo:0},
        p40:{selecao:false, tempo:0},
        p41:{selecao:false, tempo:0},
        p42:{selecao:false, tempo:0},
        p43:{selecao:false, tempo:0},
        p44:{selecao:false, tempo:0},
        p45:{selecao:false, tempo:0},
        p46:{selecao:false, tempo:0},
        p47:{selecao:false, tempo:0},
        p48:{selecao:false, tempo:0},
        p49:{selecao:false, tempo:0},
        p50:{selecao:false, tempo:0},
        p51:{selecao:false, tempo:0}
      }
    }
  }
}
</script>

<style scoped>
.area-teste{
  margin: 10%;
}
</style>