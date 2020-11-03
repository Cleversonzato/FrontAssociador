<template>
  <div class="teste-opcoes">

    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" v-on:click="evento" id='p1'>
        <label class="form-check-label">{{ lo.p1 }}</label>
    </div>
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" v-on:click="evento" id='p2'>
        <label class="form-check-label">{{ lo.p2 }}</label>
    </div>

    {{ lo.mensagem }}
    <button type="button" class="btn btn-info col-6" v-on:click="finalizar"> {{ lo.botao }} </button>
  </div>
</template>

<script>
export default {
  name: 'Opcoes',
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
      tempoInicial:0,
      lo: this.l.opcoes,

      palavras:{
        p1:{sel:false, tempo:0},
        p2:{sel:false, tempo:0},
        p3:{sel:false, tempo:0},
        p4:{sel:false, tempo:0},
        p5:{sel:false, tempo:0},
        p6:{sel:false, tempo:0},
        p7:{sel:false, tempo:0},
        p8:{sel:false, tempo:0},
        p9:{sel:false, tempo:0},
        p10:{sel:false, tempo:0},
        p11:{sel:false, tempo:0},
        p12:{sel:false, tempo:0},
        p13:{sel:false, tempo:0},
        p14:{sel:false, tempo:0},
        p15:{sel:false, tempo:0},
        p16:{sel:false, tempo:0},
        p17:{sel:false, tempo:0},
        p18:{sel:false, tempo:0},
        p19:{sel:false, tempo:0},
        p20:{sel:false, tempo:0},
        p21:{sel:false, tempo:0},
        p22:{sel:false, tempo:0},
        p23:{sel:false, tempo:0},
        p24:{sel:false, tempo:0},
        p25:{sel:false, tempo:0},
        p26:{sel:false, tempo:0},
        p27:{sel:false, tempo:0},
        p28:{sel:false, tempo:0},
        p29:{sel:false, tempo:0},
        p30:{sel:false, tempo:0},
        p31:{sel:false, tempo:0},
        p32:{sel:false, tempo:0},
        p33:{sel:false, tempo:0},
        p34:{sel:false, tempo:0},
        p35:{sel:false, tempo:0},
        p36:{sel:false, tempo:0},
        p37:{sel:false, tempo:0},
        p38:{sel:false, tempo:0},
        p39:{sel:false, tempo:0},
        p40:{sel:false, tempo:0},
        p41:{sel:false, tempo:0},
        p42:{sel:false, tempo:0},
        p43:{sel:false, tempo:0},
        p44:{sel:false, tempo:0},
        p45:{sel:false, tempo:0},
        p46:{sel:false, tempo:0},
        p47:{sel:false, tempo:0},
        p48:{sel:false, tempo:0},
        p49:{sel:false, tempo:0},
        p50:{sel:false, tempo:0}
      }
    }
  }
}
</script>
