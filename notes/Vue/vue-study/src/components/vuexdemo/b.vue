<template>
    <div>
        <p>count:{{$store.state.count.count}}</p>
        <button @click="add(2)">增加</button>
        <button @click="reduce">减少</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    methods: mapActions('count',['add','reduce'])
    
}
</script>