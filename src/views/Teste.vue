<template>
  <div class="teste">
    <div class="row">
      <div class="historia col-12" v-show="tipo_teste != 'finalizando'">
        <transition name="component-fade" mode="out-in">
          <component v-bind:is="comp_atual" v-bind:inicio="tempoInicial" v-on:iniciar="iniciar_teste"  v-on:evento="evento" v-on:finalizar="finalizar"/>
        </transition>
      </div>
      <div class="carregando col-12" v-show="tipo_teste == 'finalizando'">
        <div>
          {{ l.carregando }}
        </div>
        <br/>
        <img :src="require('../../images/calculando.svg')" class="img-fluid" :alt="l.imagem_carregando" />      
      </div>
    </div>      
  </div>
</template>

<script>
import axios from '../axios'
import HistoriaOuroPerdido from '../components/historias/OuroPerdido'
import TesteOpcoes from '../components/testes/Opcoes'
import TesteEscalas from '../components/testes/Escalas'
import TesteDigitadas from '../components/testes/Digitadas'

export default {
  name: 'Teste',
  components: {      
      'historia-ouro': HistoriaOuroPerdido,
      'teste-opcoes': TesteOpcoes,
      'teste-escalas': TesteEscalas,
      'teste-digitadas': TesteDigitadas
  },
  data(){
    return{
      id_teste: localStorage.teste,
      tipo_teste: this.$route.params.tipo,
      selecao:"",
      tempoInicial:0,
      comp_atual:'historia-ouro'
    }
  },
  methods:{
    iniciar_teste(escolha){
      this.tempoInicial = Date.now()
      this.selecao = escolha.selecao
      this.comp_atual = 'teste-'+this.tipo_teste
      this.selecionado = true
    },
    evento(evento){
      axios.post('evento', {
          'id_teste': this.id_teste,
          'tipo_teste': this.tipo_teste,
          'evento':evento                    
        });
    },
    finalizar(resultados){
      const self=this      
      axios.post('resultado', {
          'id_teste': this.id_teste,
          'tempo_inicio_milisegundos': this.tempoInicial,
          'tipo_teste': this.tipo_teste,
          'escolha':this.selecao,
          'resultados':resultados
        }).then(function (response) {
          self.$router.push({name:'resultado', query:{'resultado':response.data.sigla}})
        });
        this.tipo_teste = 'finalizando'
    }
  }  
}
</script>
<style scoped>
.carregando{
  margin-top: 20%;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>