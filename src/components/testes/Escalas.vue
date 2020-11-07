<template>
  <div class="teste-escalas">
    <div class="area-teste">
      <div v-for="(valor, nome, i) in palavras" :key="valor">      
        <div class="form-group col-12" v-show="i == contador">  
          <label class="col-form-label" :for="nome">{{ l[nome] }}</label> 
          <input type="range" class="form-control-range col-12" :id="nome" min="1" max="100"  v-on:click="evento" v-model="valor.quantidade"/>           
        </div>                 
      </div>
    </div>
    <div class="col-12">
      <button type="button" class="btn btn-info" v-on:click="proximo" v-show="contador < 19"> {{ l.proximo }} </button>
      <button type="button" class="btn btn-info" v-on:click="finalizar" v-show="contador == 19"> {{ l.botao }} </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Escalas',
  props:['inicio'],
  methods:{
      evento(evento){
        const id = evento.target.id
        const palavra = this.$data.palavras[id]
        if(this.tempoInicialPalavra === 0){
          this.tempoInicialPalavra = this.inicio
        }
        palavra.tempo = new Date().getTime()- this.tempoInicialPalavra

        this.$emit('evento', {'id_palavra': id, 'quantidade': palavra.quantidade, 'tempo_milisegundo': palavra.tempo})  
      },
      proximo(){
        this.contador += 1
        this.tempoInicialPalavra = new Date().getTime()
      },
      finalizar(){       
        const tempo = new Date().getTime()- this.inicio
        this.$emit('finalizar', {'tempo_milisegundo':tempo, 'palavras':this.palavras})
      }
  },
  data(){
    return{
      tempoInicialPalavra: 0,
      contador:0,

      palavras:{
        p1:{quantidade:0, tempo:0},
        p2:{quantidade:0, tempo:0},
        p3:{quantidade:0, tempo:0},
        p4:{quantidade:0, tempo:0},
        p5:{quantidade:0, tempo:0},
        p6:{quantidade:0, tempo:0},
        p7:{quantidade:0, tempo:0},
        p8:{quantidade:0, tempo:0},
        p9:{quantidade:0, tempo:0},
        p10:{quantidade:0, tempo:0},
        p11:{quantidade:0, tempo:0},
        p12:{quantidade:0, tempo:0},
        p13:{quantidade:0, tempo:0},
        p14:{quantidade:0, tempo:0},
        p15:{quantidade:0, tempo:0},
        p16:{quantidade:0, tempo:0},
        p17:{quantidade:0, tempo:0},
        p18:{quantidade:0, tempo:0},
        p19:{quantidade:0, tempo:0},
        p20:{quantidade:0, tempo:0}
      }
    }  
  }
}
</script>
