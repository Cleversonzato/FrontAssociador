<template>
  <div class="teste">
    <div class="row">
      <div class="historia col-12" v-show="!(selecionado)">
        <historia-ouro v-on:iniciar="iniciar_teste" />
      </div>
      <div class="respostas col-12" v-show="selecionado">
        <teste-opcoes v-on:evento="evento" v-bind:inicio="tempoInicial" v-on:finalizar="finalizar" v-if="tipo_teste === 'opcoes'"/>
        <teste-escalas v-on:evento="evento" v-bind:inicio="tempoInicial" v-on:finalizar="finalizar" v-if="tipo_teste === 'escalas'"/>
        <teste-digitadas v-on:evento="evento" v-bind:inicio="tempoInicial" v-on:finalizar="finalizar" v-if="tipo_teste === 'digitadas'"/>

        <div class="carregando" v-show="tipo_teste == 'finalizando'">
          <div>
            {{ l.carregando }}
          </div>
          <br/>
          <img :src="require('../../images/calculando.svg')" class="img-fluid" :alt="l.imagem_carregando" />      
        </div>
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
      selecionado: false,
      selecao:"",
      tempoInicial:0
    }
  },
  methods:{
    iniciar_teste(escolha){
      this.tempoInicial = Date.now()
      this.selecao = escolha.selecao

      axios.post('escolha', {
          'id_teste': this.id_teste,
          'tipo_teste': this.tipo_teste,
          'tempo_inicio_milisegundo': this.tempoInicial,
          'escolha':escolha                    
        });
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
  margin: 20%;
}
</style>