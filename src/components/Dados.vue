<template>  
    <div class="pizzas border">
        <h3> {{ l.titulo }} </h3>
        <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <canvas id="opcoes" width="100" height="100" ref="opcoes"/>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <canvas id="escalas" width="100" height="100" ref="escalas"/>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <canvas id="digitadas" width="100" height="100" ref="digitadas"/>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js'
import axios from '../axios'

export default {
  name:'Dados',
  methods:{
      forno_de_pizza:function(componente, nome, d1, d2){
        return new Chart(componente, {
            type:'pie',
            data:{labels: [this.l.acertos, this.l.erros],
            datasets: [{
                data: [d1, d2],
                backgroundColor: ['rgba(54, 162, 235, 0.2)','rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)' ],
                borderWidth: 1
            }]},
            options:{
                title:{display:true, text:nome, fontFamily:'Arial' }
            }
        })
      }
  },
  mounted () {
      const self = this
      axios.get('dados').then(function (response) {
        self.forno_de_pizza(this.$refs['opcoes'], this.l.opcoes, response.data.opcoes.acertos, response.data.opcoes.erros)
        self.forno_de_pizza(this.$refs['escalas'], this.l.escalas, response.data.escalas.acertos, response.data.escalas.erros)
        self.forno_de_pizza(this.$refs['digitadas'], this.l.digitadas, response.data.digitadas.acertos, response.data.digitadas.erros)
      });
  }
}

</script>
<style scoped>
.pizzas{
    padding: 5%;
    margin-bottom: 5%;
    margin-top: 5%;
}
</style>