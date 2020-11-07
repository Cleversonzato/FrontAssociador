<template>
  <div class="teste-digitadas">
    <div class="area-teste">
      <div v-for="(item, nome, i) in palavras" :key="item">      
        <div class="form-group col-12" v-show="i == contador">  
          <label class="col-form-label" :for="nome"><h3>{{ l[nome] }}</h3></label> 
          <input type="text" class="form-control-range col-12" :id="nome" v-on:keyup="evento" v-model="item.valor"/>           
        </div>                 
      </div>
    </div>
    <div class="col-12">
      <button type="button" class="btn btn-info" v-on:click="proximo" v-show="contador < 14"> {{ l.proximo }} </button>
      <button type="button" class="btn btn-info" v-on:click="finalizar" v-show="contador == 14"> {{ l.botao }} </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Digitadas',
  props:['inicio'],
  methods:{
      evento(evento){
        const id = evento.target.id
        const palavra = this.$data.palavras[id]
        if(this.tempoInicialPalavra === 0){
          this.tempoInicialPalavra = this.inicio
        }
        palavra.tempo = new Date().getTime()- this.tempoInicialPalavra

        this.$emit('evento', {'id_palavra': id, 'valor': palavra.valor, 'tempo_milisegundo': palavra.tempo})  
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
        p1:{valor:'', tempo:0},
        p2:{valor:'', tempo:0},
        p3:{valor:'', tempo:0},
        p4:{valor:'', tempo:0},
        p5:{valor:'', tempo:0},
        p6:{valor:'', tempo:0},
        p7:{valor:'', tempo:0},
        p8:{valor:'', tempo:0},
        p9:{valor:'', tempo:0},
        p10:{valor:'', tempo:0},
        p11:{valor:'', tempo:0},
        p12:{valor:'', tempo:0},
        p13:{valor:'', tempo:0},
        p14:{valor:'', tempo:0},
        p15:{valor:'', tempo:0}
      }
    }  
  }
}
</script>

<style scoped>
.area-teste{
  margin-top:30%;
  margin-bottom:15%;
}
</style>