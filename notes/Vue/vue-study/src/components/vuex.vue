<template>
    <div>
        <h1>vuex</h1>
        <h2>计数：{{$store.state.count}}</h2>
        <button @click="add">增加</button>
        <button @click="red">减少</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions({
            add: 'increment'
        }),
        ...mapActions({
            red: 'decrement'
        })
    }
}
</script>