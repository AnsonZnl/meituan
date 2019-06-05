<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p :class="obj">11</p>
  
    <ul>
      <li v-for="(value,name,ind) in items" :key="value.msg">
        {{ind}}-{{name}}-{{value}}
      </li>
    </ul>
    <div>
      <button @click="add(2,$event)">{{count}}</button>
    </div>
    <div class="parent" @click="parent">
      <p>parent </p>
      <div class="child" @click.stop="child">child</div>
    </div>
    <input v-on:keyup.enter="log">
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
      ,items:{
        msg: 'Foo',
        post: 'Bar'
    },
    count:1
    }
  },
  computed:{
    c:function(){
      return this.a - this.b;
    }
  },
methods: {
    add:function(c,e){
    this.count+=c;
    console.log(e)
  },
  child: function(){
  console.log('child')
  },
  parent:function(){
    console.log('parent')
  },
  log(){
    console.log('ok !')
  }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
