<template>
  <div class="ouro-perdido">     
    <div class="imagens">
      <img :src="require('../../../images/rua.jpg')" class="img-fluid" :alt="l.rua_alt" v-show="etapa < 4"/>
      <img :src="require('../../../images/ouro.jpg')" class="img-fluid" :alt="l.ouro_alt" v-show="3 < etapa & etapa < 8" />
      <img :src="require('../../../images/reporteres.jpg')" class="img-fluid" :alt="l.reporteres_alt" v-show="7 < etapa & etapa < 12"/>
      <img :src="require('../../../images/exame.jpg')" class="img-fluid" :alt="l.rexame_alt" v-show=" 12 === etapa"/>
    </div>
    <div class="textos" >
      <div v-for="i in 12" :key="i">  
        <div v-show="etapa == i">{{ l[i] }}</div>
      </div>
    </div>   
    <div class="botoes col-12">
      <button type="button" class="btn btn-info col-6" v-on:click="etapa += 1" v-show="(7 != etapa & 12 != etapa )"> {{ l.proximo }} </button>
      <div v-show="7 == etapa">     
        <button type="button" class="btn btn-warning col-6" v-on:click="selecionar('pegar')" > {{ l.pegar }} </button>
        <button type="button" class="btn btn-primary col-6" v-on:click="selecionar('deixar')"> {{ l.deixar }} </button>
      </div>
      <button type="button" class="btn btn-danger col-6" v-on:click="iniciar_teste" v-show=" 12 == etapa"> {{ l.iniciar }} </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OuroPerdido',
  mounted(){
   this.audio.play();
   this.audio.loop = true;
  },
  data(){
    return{
      etapa:1,
      selecao:"",
      audio:new Audio('../../../historia.mp3')
    }
  },
  methods:{
      iniciar_teste(){
        this.audio.pause()
        this.$emit('iniciar', {'historia': 'Ouro perdido','selecao': this.selecao});
      },
      selecionar(escolha){
        this.etapa += 1
        this.selecao = escolha
      }
  }
}
</script>
<style scoped>
.imagens{
  margin-top: 10%;
}
.textos{
  margin:5%;
}
</style>