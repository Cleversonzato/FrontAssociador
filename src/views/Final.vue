<template>
  <div class="final">     
    <div class="agradecimento">
      <h1>{{ l.agradecimento }}</h1>
        <div><img src="/images/tchau.png" class="img-fluid" alt="Imagem de erro"/></div>
      {{ l.mais }}
    </div>
  </div>
  <div class="fim  border">
    <h3>{{ l.sobre }}</h3>
    <ul class="list-group border-0">
      <li class="list-group-item border-0">
        {{ l.autor }} <a href="https://www.linkedin.com/in/cleversonzocchesato/"><img src="/images/linkedin.jpeg" class="img-fluid" alt="linkedin logo" width="35" />Cleverson Zocche Sato</a>
      </li>
      <li class="list-group-item border-0">
        {{ l.fonte_imagens }} 
        <a href="https://pixabay.com"> https://pixabay.com </a>, 
        <a href="https://loading.io/"> https://loading.io/</a>   
      </li>
      <li class="list-group-item border-0">     
        {{ l.fonte_som }} 
        <a href="https://www.bensound.com/"> https://www.bensound.com/ </a>   
      </li>
      <li class="list-group-item border-0">
        {{ l.codigo }}  <a href="https://github.com/Cleversonzato/IAssociador"><img src="/images/github.jpg" class="img-fluid" alt="github logo" width="60" />https://github.com/Cleversonzato/IAssociador</a>
      </li>
      <li class="list-group-item border-0">
        {{ l.desenvolvido }} 
        <a href="https://vuejs.org/"><img src="/images/vue.png" class="img-fluid" alt="vue logo" width="33" /></a>
        <a href="https://www.python.org/"><img src="/images/python.png" class="img-fluid" alt="python logo" width="40" /></a>
        <a href="https://www.mongodb.com"><img src="/images/mongo.jpg" class="img-fluid" alt="mongodb logo" width="120"/></a>
      </li>
      <li class="list-group-item border-0">
        {{ l.hospedagem }}
        <a href="https://www.heroku.com/"><img src="/images/heroku.png" class="img-fluid" alt="heroku logo" width="110"/></a>
        <a href="https://www.mongodb.com/cloud/atlas"><img src="/images/atlas.jpeg" class="img-fluid" alt="mongodb atlas logo" width="80"/></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Final',
}
</script>

<style scoped>
.fim{
  padding: 5%;
  margin: 5%;
}
ul{
  text-align: justify;
}
img{
    padding:3px;
}
</style>