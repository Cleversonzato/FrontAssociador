<template>
  <div class="resultado"> 
    <div>    
      <div>
        <h1>{{ l.vv }}</h1>
        {{ l.vv_comentarios }}
      </div>
      <div>
        <h1>{{ l.vf }}</h1>
        {{ l.vf_comentarios }}
      </div>
      <div>
        <h1>{{ l.fv }}</h1>
        {{ l.fv_comentarios }}
      </div>
      <div>
        <h1>{{ l.ff }}</h1>
        {{ l.ff_comentarios }}
      </div>
    </div>
    <h1>{{ l.agradecimento }}</h1>
  </div>
  <div class="fim">
    {{ l.sobre }}
    <div>
      {{ l.codigo }}  <a href="https://github.com/Cleversonzato/IAssociador"><img src="/images/github.jpg" class="img-fluid" alt="github logo" width="70" />https://github.com/Cleversonzato/IAssociador</a>
    </div>
    <div>
      {{ l.desenvolvido }} 
      <a href="https://vuejs.org/"><img src="/images/vue.png" class="img-fluid" alt="vue logo" width="38" /></a>
      <a href="https://www.python.org/"><img src="/images/python.png" class="img-fluid" alt="python logo" width="50" /></a>
      <a href="https://www.mongodb.com"><img src="/images/mongo.jpg" class="img-fluid" alt="mongodb logo" width="150"/></a>
    </div>
    <div>
      {{ l.hospedagem }}
      <a href="https://www.heroku.com/"><img src="/images/heroku.png" class="img-fluid" alt="heroku logo" width="150"/></a>
      <a href="https://www.mongodb.com/cloud/atlas"><img src="/images/atlas.jpeg" class="img-fluid" alt="mongodb atlas logo" width="150"/></a>
    </div>
      {{ l.fonte_imagens }} 
      <a href="https://pixabay.com"> https://pixabay.com </a>, 
      <a href="https://loading.io/"> https://loading.io/</a>
      <br/>
      {{ l.fonte_som }} 
      <a href="https://www.bensound.com/"> https://www.bensound.com/ </a>   
    </div>
</template>

<script>
export default {
  name: 'Resultado', 
  data(){
    return{
      resultado: this.$route.query.resultado
    }
  }
}
</script>