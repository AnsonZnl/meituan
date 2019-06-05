<template>
    <div>
       <Child>
           <p slot='top'>上面</p>
           <p slot="bottom">下面</p>
       </Child> 
    </div>
</template>
<script>
import Child from './child.vue'
export default {
    components:{
        Child
    },
    data(){
        return{
            world: 'world',
        }
    }
}
</script>
<style>
    
</style>