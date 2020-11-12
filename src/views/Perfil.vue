<template>
  <div class="perfil">    
    <h1>{{ l.titulo }}</h1>
    <br/>    
    <div>{{ l.explicacao }}</div> 
    <small>{{ l.observacao }}</small> 
    <br/>
    <br/>
    <div class="row formulario">
      <label for="dt_nasc" class="col-form-label">{{ l.dt_nasc }}</label> 
      <input class="form-control" type="date" id="dt_nasc" ref="dt_nasc">
    </div>
    <div class="row formulario">
      <label for="sexo" class="col-form-label">{{ l.sexo }}</label> 
      <input class="form-control" type="input" id="sexo" ref="sexo"/>
    </div>
    <div class="row formulario">
     <label for="raca" class="col-form-label">{{ l.raca }}</label> 
     <input class="form-control" type="input" id="raca" ref="raca"/>
    </div>
    <div class="row formulario">
      <label for="escolaridade" class="col-form-label">{{ l.escolaridade }}</label> 
      <input class="form-control" type="input" id="escolaridade" ref="escolaridade">
    </div>
    <div class="row formulario">  
     <label for="residencia" class="col-form-label"> {{ l.residencia }} </label> 
     <input class="form-control" type="input" id="residencia" ref="residencia"/>
    </div>
    <div class="row formulario">
      <label for="lateralidade" class="col-form-label"> {{ l.lateralidade }}  <small>{{ l.lateralidade_explicacao }}</small>  </label> 
      <input class="form-control" type="input" id="lateralidade" ref="lateralidade"/>     
    </div>
    <div class="row formulario">
      <label for="livre" class="col-form-label"> {{ l.livre }} </label> 
      <textarea id="livre" class="form-control" ref="livre"/>     
    </div>
    <br/>
    <div class="final">
      <div>{{ l.mensagem_final }}</div>
      <button type="button" class="btn btn-success" v-on:click="iniciar_pesquisa" :disabled="clicado">{{ l.botao }}</button>
    </div>

  </div>
</template>

<script>
import axios_local from '../axios'
import axios from 'axios'

export default {
  name: 'Perfil',
  beforeCreate(){
    const self = this
    axios.get('https://api.ipify.org?format=json')
     .then((retorno)=>{
        self.ip = retorno.data.ip
       })
  },
  data(){
    return{
      clicado:false,
      ip:"Ainda não localizado"
    }
  },
  methods:{
    iniciar_pesquisa(){
      this.clicado = true
      const self = this    
      axios_local.post('perfil', {
            'lingua': localStorage.lang,
            'language': navigator.languages,
            'data_milisegundos': Date.now(),
            'ip': this.ip,
            'userAgent': navigator.userAgent,
            'largura':window.innerWidth,
            'altura': window.innerHeight,
            'dt_nasc': this.$refs.dt_nasc.value,
            'sexo':this.$refs.sexo.value,
            'raca':this.$refs.raca.value,
            'escolaridade':this.$refs.escolaridade.value,
            'residencia':this.$refs.residencia.value,
            'lateralidade':this.$refs.lateralidade.value
            
          }).then(function (response) {
            localStorage.teste = response.data.teste
            self.$router.push('selecao')
          });
    }
  }
}
</script>

<style scoped>

.final{
  text-align: center;  
}

.btn{
  margin:1%;
}

</style>

