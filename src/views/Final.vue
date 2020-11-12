<template>
  <div class="final">     
    <div class="agradecimento">
      <h1>{{ l.agradecimento }}</h1>
        <div><img :src="require('../../images/tchau.png')" class="img-fluid" alt="Imagem de erro" width="250"/></div>
        <br/>
      {{ l.mais }}
    </div>
  </div>
  <div class="fim  border">
    <h3>{{ l.sobre }}</h3>
    <ul class="list-group border-0">
      <li class="list-group-item border-0">
        {{ l.autor }} 
        <br/>
        <a href="https://www.linkedin.com/in/cleversonzocchesato/"><img :src="require('../../images/linkedin.jpeg')" class="img-fluid" alt="linkedin logo" width="35" />Cleverson Zocche Sato</a>
      </li>
      <li class="list-group-item border-0">
        {{ l.fonte_imagens }} 
        <br/>
        <a href="https://pixabay.com"> https://pixabay.com </a>, 
        <a href="https://loading.io/"> https://loading.io/</a>   
      </li>
      <li class="list-group-item border-0">     
        {{ l.fonte_som }} 
        <br/>
        <a href="https://www.bensound.com/"> https://www.bensound.com/ </a>   
      </li>
      <li class="list-group-item border-0">
        {{ l.codigo }}  <img :src="require('../../images/github.jpg')" class="img-fluid" alt="github logo" width="60" />
        <div>
          <a href="https://github.com/Cleversonzato/IAssociador">https://github.com/Cleversonzato/IAssociador</a> <br/>
          <a href="https://github.com/Cleversonzato/FrontAssociador">https://github.com/Cleversonzato/FrontAssociador</a>
        </div>
      </li>
      <li class="list-group-item border-0">
        {{ l.desenvolvido }}
        <br/> 
        <a href="https://vuejs.org/"><img :src="require('../../images/vue.png')" class="img-fluid" alt="vue logo" width="33" /></a>
        <a href="https://www.python.org/"><img :src="require('../../images/python.png')" class="img-fluid" alt="python logo" width="40" /></a>
        <a href="https://www.mongodb.com"><img :src="require('../../images/mongo.jpg')" class="img-fluid" alt="mongodb logo" width="120"/></a>
      </li>
      <li class="list-group-item border-0">
        {{ l.hospedagem }}
        <br/>
        <a href="https://www.heroku.com/"><img :src="require('../../images/heroku.png')" class="img-fluid" alt="heroku logo" width="110"/></a>
        <a href="https://www.mongodb.com/cloud/atlas"><img :src="require('../../images/atlas.jpeg')" class="img-fluid" alt="mongodb atlas logo" width="80"/></a>
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
  margin: 5%;
  padding: 5%;
}
ul{
  text-align: justify;
}
img{
    padding:3px;
}
</style>