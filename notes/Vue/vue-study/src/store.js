import Vue from 'vue'
import Vuex from 'vuex'

const state={
    count: 0
}
const mutations={
    increment(state){
        state.count++
    },
    decrement(state){
        state.count--
    }
}
const actions={
    increment:({commit})=>{
        commit('increment')
    },
    decrement:({commit})=>{
        commit('decrement')
    }
}
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    mutations
})