

import {setDefaultAddress ,delAddress} from "../../api/address"
import Vue from 'vue'

export default {
    state: {
        addressList: [] // 存储单个商品的原价和促销价
    },
    mutations: {
        get(state, params) {
            state.addressList =params?params:[]
        }
    },
    actions: {
       
        async del({dispatch}, id) {
            const res = await delAddress({ id })
            if (res.code == 200) {
                // dispatch('get')
                new Vue().$message.success('删除地址成功')
                // dispatch('get')
            } else {
                new Vue().$message.error('删除地址失败')
            }
        },
        async setDefault({dispatch},params){
            const res = await setDefaultAddress(params);
            if(res.code==200){
                new Vue().$message.success('设置默认地址成功')
               
            }else{
                new Vue().$message.error('设置默认地址失败')
            }
        }
    }
}