import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
 modules:{
  //  呵呵模块
   hehe:{
     namespaced:true, //开启命名空间
     state:{name:'韩梅梅'},
     mutations:{
       changeName(state){
         state.name='李雷雷'
       }
     },
     getters:{},
     actions:{}
   },
  //  嘻嘻模块
   xixi:{
     state:{age:16},
     mutations:{
       changeAge(state){
         state.age=99
       }
     },
     actions:{},
     getters:{}
   }
 }
})


export default store