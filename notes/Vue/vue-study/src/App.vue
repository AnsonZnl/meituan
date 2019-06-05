<template>
  <div id="app">
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Com :age="agez"/> -->
      <Vuexx/>

  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Com from './components/com'
import Vuexx from './components/vuex'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Com,
    Vuexx
  },
  data() {
    return {
      agez: 14
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
