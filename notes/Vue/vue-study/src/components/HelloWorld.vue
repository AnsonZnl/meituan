<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p :class="obj">11</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      a:100,
      b:20,
      a1: true, a2: false,
      obj:{red: true ,blue: false}
    }
  },
  computed:{
    c:function(){
      return this.a - this.b;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red{
  color: red;
}
</style>
