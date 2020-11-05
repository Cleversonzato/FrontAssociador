<template>
  <div class="container-fluid">
    <div class="row app">
      <div class="col-md-2 col-lg-2 col-xl-3"/>
        <div class="col-md-8 col-lg-8 col-xl-6">
          <router-view/>
        </div>
      <div class="col-md-2 col-lg-2 col-xl-3"/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.app{
  margin:3%
}

button{
  margin-bottom: 5%;
}
</style>
