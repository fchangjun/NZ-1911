import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    name:'韩梅梅',
    age:16,
  },
  mutations:{
    changeName(state){
      state.name='李雷雷'
    },
    changeAge(state){
      state.age=99
    }
  }
})


export default store