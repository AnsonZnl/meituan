const state={
    count: 1
}
const mutations={
    add(state,parma){
        state.count+=parma
    },
    reduce(state){
        state.count--
    }
}
const actions={
    add:({commit},param)=>{
        commit('add',param)
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