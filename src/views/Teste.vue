<template>
  <div class="teste">
    <div class="row">
      <teste-opcoes v-on:evento="evento" v-on:finalizar="finalizar"/>
    </div>    
  </div>
</template>

<script>
import axios from '../axios'
import TesteOpcoes from '../components/TesteOpcoes'

export default {
  name: 'Teste',
  components: {
      'teste-opcoes': TesteOpcoes,
  },
  data(){
    return{
      id_teste: localStorage.teste,
      tipo_teste: this.$route.params.tipo,
    }
  },
  methods:{
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
