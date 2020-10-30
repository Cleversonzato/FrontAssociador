<template>
  <div class="perfil">    
    <h1>{{ l.titulo }}</h1>
    <br/>
    <p>{{ l.explicacao }}</p> 
     
    <div class="row formulario">
      <label for="dt_nasc" class="col-form-label">{{ l.dt_nasc }}</label> 
      <input class="form-control" type="date" id="dt_nasc" ref="dt_nasc">
    </div>
    <div class="row formulario">
      <label for="sexo" class="col-form-label">{{ l.sexo }}</label> 
      <input class="form-control" type="input" id="sexo" ref="sexo">
    </div>
    <div class="row formulario">
     <label for="raca" class="col-form-label">{{ l.raca }}</label> 
     <input class="form-control" type="input" id="raca" ref="raca">
    </div>
    <div class="row formulario">
      <label for="escolaridade" class="col-form-label">{{ l.escolaridade }}</label> 
      <input class="form-control" type="input" id="escolaridade" ref="escolaridade">
    </div>
    <div class="row formulario">  
     <label for="residencia" class="col-form-label"> {{ l.residencia }} </label> 
     <input class="form-control" type="input" id="residencia" ref="residencia">
    </div>
    <div class="row formulario">
      <label for="lateralidade" class="col-form-label"> {{ l.lateralidade }}  <small>{{ l.lateralidade_explicacao }}</small>  </label> 
      <input class="form-control" type="input" id="lateralidade" ref="lateralidade">     
    </div>

    <div class="row final">
      <div class="final">{{ l.mensagem_final }}</div> 
      <button type="button" class="btn btn-success" v-on:click="iniciar_pesquisa">{{ l.botao }}</button>
    </div>

  </div>
</template>

<script>
import axios from '../axios'

export default {
  name: 'Perfil',
  methods:{
    iniciar_pesquisa(){
      axios.post('perfil', {
            'dt_nasc': this.$refs.dt_nasc.value,
            'sexo':this.$refs.sexo.value,
            'raca':this.$refs.raca.value,
            'escolaridade':this.$refs.escolaridade.value,
            'residencia':this.$refs.residencia.value,
            'lateralidade':this.$refs.lateralidade.value
          }).then(function (response) {
            console.log(response);
          });
    }
  }
}
</script>

<style scoped>
.perfil{
  margin: 50px;
}
.formulario{
  text-align: center;
  margin: 5px;
}
.final{
  margin:10px;
}

</style>

