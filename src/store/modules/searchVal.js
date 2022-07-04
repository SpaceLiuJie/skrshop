export default {
    // namespaced:true,
    state:{
       search_val: 0,
    },
    mutations:{
        SEARCHVAL(state,value){
            state.search_val = value;
        }
    },
    actions:{
        searchVal(store,value){
            store.commit('SEARCHVAL',value)
        }
    },
    getters:{
        
    }
}