<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style lang="scss">
$white: #FBFBFB;
$dark-blue: #0D3BB2;
$light-blue: #4579FF;
$light-blue-1: #2C66FF;
$linear-gradient: linear-gradient(rgba(69, 121, 255, 1), rgba(44, 102, 255, 1)); 
h1,h2,h3,h4,h5,h6,a,p,span,div,input,label{
  font-family: 'Nunito', sans-serif;
}
body {
  background-color: $white;
}
.clear {
  clear: both;
}
.page-title {
  text-align: center;
  font-weight: bold;
  margin: 1em auto;
  color: $dark-blue;
  font-size: 3rem;
}
.img-responsive {
  max-width: 100%;
  height: auto;
}
</style>
