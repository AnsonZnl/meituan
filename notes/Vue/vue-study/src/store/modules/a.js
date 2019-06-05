const state={
    money: 1
}
const mutations={
    add(state){
        state.money++
    },
    reduce(state){
        state.money--
    }
}
const actions={
    add:({commit})=>{
        commit('add')
    },
    reduce:({commit})=>{
        commit('reduce')
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}