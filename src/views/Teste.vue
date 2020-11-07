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
          <img src="/images/calculando.svg" class="img-fluid" :alt="l.imagem_carregando" />      
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
// import axios from '../axios'
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
      console.log({
        'tempo_milisegundo': this.tempoInicial,
        'escolha':escolha
      })
      // axios.post('escolha', {
      //     'id_teste': this.id_teste,
      //     'tipo_teste': this.tipo_teste,
      //     'seed':this.seed,
      //     'data_tc': Date.UTC(),
      //     'escolha':escolha                    
      //   }).then(function (response) {
      //     console.log(response)
      //   });

      this.selecionado = true
    },
    evento(evento){
      console.log(this.id_teste)
      console.log(this.tipo_teste)
      console.log(evento)

      // axios.post('evento', {
      //     'id_teste': this.id_teste,
      //     'tipo_teste': this.tipo_teste,
      //     'evento':evento                    
      //   }).then(function (response) {
      //     console.log(response)
        // });
    },
    finalizar(resultados){
      this.tipo_teste = 'finalizando'
      console.log(this.id_teste)
      console.log(this.tipo_teste)
      console.log(this.selecao)
      console.log(resultados)

      this.$router.push({name:'resultado', query:{'resultado':'vv'}})
      // axios.post('resultado', {
      //     'id_teste': this.id_teste,
      //     'tipo_teste': this.tipo_teste,
      //     'escolha':this.selecao,
      //     'resultados':resultados
                    
      //   }).then(function (response) {
      //     console.log(response)
      //     this.$router.push({name:'resultado', query:{'resultado':resultado.culpado}})
      //   });
    }
  }  
}
</script>
<style scoped>
.carregando{
  margin: 20%;
}
</style>