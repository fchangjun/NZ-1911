//创建 全局状态管理实例 
import Vuex from 'vuex'
import Vue from  'vue'
Vue.use(Vuex)
// 
let  store = new Vuex.Store({
   state:{
     name:'韩梅梅'
   },
   getters:{
     double(state){
       return state.name+state.name
     }
   },
   mutations:{
     changeName(state){
       state.name='李雷雷'
     }
   }
})

export default store

