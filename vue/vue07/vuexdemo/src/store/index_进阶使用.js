import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    name:'韩梅梅',
    age:16,
    sex:'未知'
  },
  mutations:{
    changeName(state,params){
      state.name=params.name
    }
  },
  actions:{
    changeNameAction({commit},params){
      // 网络请求
      setTimeout(()=>{
        commit('changeName',params)
      },1000)
    }
  },
  getters:{
    double(state){
      return state.age*2
    }
  }
})


export default store