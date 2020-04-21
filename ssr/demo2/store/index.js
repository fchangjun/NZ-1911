// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// let store = new Vuex.Store({
//   state:{
//     count:1
//   },
//   mutations:{},
//   actions:{},
//   getters:{}
// })
// // 客户端直接导出vuex实例对象
// export default  store  
// // nuxt 框架里 要求导出一个函数 函数内部返回实例
// export default ()=>{
//   return store
// }
// export default ()=>(new Vuex.Store({
//   state:{
//     count:3
// //   },
//   mutations:{
//     changeCount(state,num = 1){
//       state.count += num
//     }
//   },
//   getters:{
//     double(state){
//       return state.count*2
//     }
//   },
//   actions:{
//     changeCountSync({commit},num = 1){
//       setTimeout(()=>{
//         commit('changeCount',num)
//       },2000)
//     }
//   }
// }))
// 模块化写法
export const  state =()=>(
  {
    count:3
  }
)
export const  mutations={
  changeCount(state,num = 1){
    state.count += num
  }
}
export const getters = {
  double(state){
    return state.count*2
  }
}
export const actions={
  changeCountSync({commit},num = 1){
    setTimeout(()=>{
      commit('changeCount',num)
    },2000)
  }
}