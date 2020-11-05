<template>
  <div class="selecao">
    <h1>{{ l.titulo }}</h1>    
    <br/>
    <div class="row">    
        <button type="button" class="btn btn-secondary col-4" v-on:click="selecionar('opcoes')"> {{ l.opcoes }} </button>
         <button type="button" class="btn btn-secondary col-4" v-on:click="selecionar('escalas')"> {{ l.escalas }} </button>
        <button type="button" class="btn btn-secondary col-4" v-on:click="selecionar('digitadas')"> {{ l.digitadas }} </button>
    </div>
    
    <div class="row border explicacao">
        <div>
            <div v-show="aba == 'opcoes'"> 
                <p>{{ l.explicacao_opcoes }}</p>
                <div class="form-check-inline col-3">
                    <input type="checkbox" class="form-check-input" id="exemplo_opcoes1" />
                    <label class="form-check-label" for="exemplo_opcoes1">{{ l.exemplo_opcoes1 }}</label>
                </div>
                <div class="form-check-inline col-3">
                    <input type="checkbox" class="form-check-input" id="exemplo_opcoes2" />                    
                    <label class="form-check-label" for="exemplo_opcoes2">{{ l.exemplo_opcoes2 }}</label>        
                </div>
                <div class="form-check-inline col-3">
                    <input type="checkbox" class="form-check-input" id="exemplo_opcoes3"/>
                    <label class="form-check-label" for="exemplo_opcoes3">{{ l.exemplo_opcoes3 }}</label>
                </div>
                <div class="form-check-inline col-3">
                    <input type="checkbox" class="form-check-input" id="exemplo_opcoes1" />
                    <label class="form-check-label" for="exemplo_opcoes1">{{ l.exemplo_opcoes4 }}</label>
                </div>
                <div class="form-check-inline col-3">
                    <input type="checkbox" class="form-check-input" id="exemplo_opcoes2" />                    
                    <label class="form-check-label" for="exemplo_opcoes2">{{ l.exemplo_opcoes5 }}</label>        
                </div>
                <div class="form-check-inline col-3">
                    <input type="checkbox" class="form-check-input" id="exemplo_opcoes3"/>
                    <label class="form-check-label" for="exemplo_opcoes3">{{ l.exemplo_opcoes6 }}</label>
                </div> 
            </div>            


            <div v-show="aba == 'escalas'" >
                <p>{{ l.explicacao_escalas }}</p>                
                <label class="col-form-label" >{{ l.exemplo_escalas }}</label> 
                <input type="range" min="1" max="100" value="0" class="form-control-range" />                   
            </div>

            <div v-show="aba == 'digitadas'">
                <p>{{ l.explicacao_digitadas }}</p>
                <div class="form-group">
                    <label for="input_1">{{ l.exemplo_digitadas }}</label>
                    <input type="text" class="form-control" id="text_1" :placeholder="l.exemplo_digitadas_input">
                </div>
            </div>
        </div>
    </div>
    <br/>
    <button type="button" class="btn btn-success col-4" v-on:click="escolhido"> {{ l.botao }} </button>
  </div>
</template>

<script>
export default {
  name: 'Selecao',
  data(){
      return{
        aba:'opcoes'
      }
  },
  methods:{
      selecionar(selecionado){
        this.aba = selecionado
      },
      escolhido(){
          this.$router.push({name:'teste', params:{'tipo':this.aba}})
      }
  }

}
</script>

<style scoped>
.explicacao {
    padding:10%;
}

p{
    margin-bottom: 5%;
}

</style>