import {setLocalStorage,getLocalStorage,removeLocalStorage} from '@/utils/localStrage.js'

export default {
    namespaced:true,
    state:{
        shopcarSet:JSON.parse(getLocalStorage()),
    },
    mutations:{
        SHOPCARSET(state,val){
            state.order = val;
        }
    },
    actions:{
        shopcarSet(store,val){
            store.commit('SHOPCARSET',val)
            console.log('11111');
            // let val = JSON.stringify(val);
           setLocalStorage(JSON.stringify(val))

            
        }
    },
    getters:{
        
    }
}