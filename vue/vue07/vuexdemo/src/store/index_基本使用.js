//创建 全局状态管理实例 
import Vuex from 'vuex'
import Vue from  'vue'
Vue.use(Vuex)
// 
let   store = new Vuex.Store({
  state:{ //全局状态值 所有组件都可以用
    name:'韩梅梅',
    age:16
  },
  // 修改全局状态值
  mutations:{
    changeName(state,params){
     console.log('修改名字',state,params)
    //  修改state里的数据
     state.name = params.name
    },
    changeAge(state,params){
      state.age = params.age
    }
  },
  // vuex里的computed
  getters:{
    double(state){
      return state.age*2
    }
  },
  actions:{  //触发mutation
    changeAgeAction({commit} ,params){
      // 通过commit函数触发mutation
      console.log('触发aciton',params)
      // let {commit} = context 
      commit('changeAge',params)
    }
  }
})

export default store

