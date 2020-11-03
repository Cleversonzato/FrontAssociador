<template>
  <div class="teste">
    <div class="row">
      <div class="historia" v-show="!(selecionado)"> 
        <historia-ouro v-on:iniciar="iniciar" v-if="seed >= 0.5"/>
        <historia-espiao v-on:iniciar="iniciar" v-if="seed < 0.5"/>
      </div>
      <div class="respostas" v-show="selecionado">
        <teste-opcoes v-on:evento="evento" v-on:finalizar="finalizar"/>
      </div>
    </div>    
  </div>
</template>

<script>
// import axios from '../axios'
import HistoriaOuroPerdido from '../components/testes/Opcoes'
import TesteOpcoes from '../components/historias/OuroPerdido'
import HistoriaEspiao from '../components/historias/Espiao'


export default {
  name: 'Teste',
  components: {
      'teste-opcoes': TesteOpcoes,
      'historia-ouro': HistoriaOuroPerdido,
      'historia-espiao': HistoriaEspiao
  },
  data(){
    return{
      id_teste: localStorage.teste,
      tipo_teste: this.$route.params.tipo,
      seed: Math.random(),
      selecionado: true
    }
  },
  methods:{
    iniciar(escolha){
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
