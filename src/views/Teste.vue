<template>
  <div class="teste">
    <div class="row">
      <div class="historia" v-show="!(selecionado)">
        <historia-ouro v-on:iniciar="iniciar_teste" v-if="seed >= 0.5" />
        <historia-espiao v-on:iniciar="iniciar_teste" v-if="seed < 0.5" />
      </div>
      <div class="respostas" v-show="selecionado">
        <teste-opcoes v-on:evento="evento" v-on:finalizar="finalizar" v-if="tipo_teste === 'opcoes'"/>
        <teste-escalas v-on:evento="evento" v-on:finalizar="finalizar" v-if="tipo_teste === 'escalas'"/>
        <teste-textos v-on:evento="evento" v-on:finalizar="finalizar" v-if="tipo_teste === 'textos'"/>
      </div>
    </div>    
  </div>
</template>

<script>
// import axios from '../axios'
import HistoriaOuroPerdido from '../components/historias/OuroPerdido'
import HistoriaEspiao from '../components/historias/Espiao'
import TesteOpcoes from '../components/testes/Opcoes'
import TesteEscalas from '../components/testes/Escalas'
import TesteTextos from '../components/testes/Textos'


export default {
  name: 'Teste',
  components: {      
      'historia-ouro': HistoriaOuroPerdido,
      'historia-espiao': HistoriaEspiao,
      'teste-opcoes': TesteOpcoes,
      'teste-escalas': TesteEscalas,
      'teste-textos': TesteTextos
  },
  data(){
    return{
      id_teste: localStorage.teste,
      tipo_teste: this.$route.params.tipo,
      seed: Math.random(),
      selecionado: false
    }
  },
  methods:{
    iniciar_teste(escolha){
      console.log({
        'data_milisegundos': Date.now(),
        'seed':this.seed,
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

      console.log(this.id_teste)
      console.log(this.tipo_teste)
      console.log(resultados)

      this.$router.push({name:'resultado'})
      // axios.post('resultado', {
      //     'id_teste': this.id_teste,
      //     'tipo_teste': this.tipo_teste,
      //     'resultados':resultados
                    
      //   }).then(function (response) {
      //     console.log(response)
      //     this.$router.push({name:'resultado', query:{'resultado':resultado.culpado}})
      //   });
    }
  }  
}
</script>
