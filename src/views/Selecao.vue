<template>
  <div class="selecao">
    <h1>{{ l.titulo }}</h1>
    <div class="row">
        <button type="button" class="btn btn-light col-4" v-on:click="selecionar('opcoes')"> {{ l.opcoes }} </button>
    </div>
    <!-- <div class="row">
         <button type="button" class="btn btn-light col-4" v-on:click="selecionar('escalas')"> {{ l.escalas }} </button>
    </div>
    <div class="row">
        <button type="button" class="btn btn-light col-4" v-on:click="selecionar('digitadas')"> {{ l.digitadas }} </button>
    </div> -->
    
    <div class="row">
        <div v-show="opcoes"> 
            <p class='col-12'>
                {{ l.explicacao_opcoes }}
            </p>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" >
                <label class="form-check-label">{{ l.exemplo_opcoes1 }}</label>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" >
                <label class="form-check-label">{{ l.exemplo_opcoes2 }}</label>
            <div class="form-group form-check">
            </div>
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label">{{ l.exemplo_opcoes3 }}</label>
            </div>
        </div>
        <div v-show="escalas" >
            <p class='col-12'>
                {{ l.explicacao_escalas }}
            </p>
            <div class="row formulario">
                <label class="col-form-label" >{{ l.exemplo_escalas }}</label> 
                <input type="range" min="1" max="100" value="0" class="form-control-range" />    
            </div>
        </div>
        <div v-show="textos">
            <p class='col-12'>
                {{ l.explicacao_textos }}
            </p>
            <div class="row formulario">
                <label class="col-form-label" >{{ l.exemplo_textos }}</label> 
                <input type="text" class="form-control" :placeholder="l.exemplo_textos_input"/>    
            </div>
        </div>
    </div>

    <button type="button" class="btn btn-success col-4" v-on:click="escolhido"> {{ l.botao }} </button>
  </div>
</template>

<script>
export default {
  name: 'Selecao',
  data(){
      return{
        opcoes:true,
        escalas:false,
        digitadas:false,
        aba:'opcoes'
      }
  },
  methods:{
      selecionar(selecionado){
          if(this.aba !== selecionado){
            this.$data[this.aba] = false
            this.$data[selecionado] = true
            this.aba = selecionado
          }
      },
      escolhido(){
          this.$router.push({name:'teste', params:{'tipo':this.aba}})
      }
  }

}
</script>

<style scoped>
.selecao{
  margin: 50px;
}

p {
  margin: 5%;
}

h1 {
  margin-bottom: 25px;
}

</style>