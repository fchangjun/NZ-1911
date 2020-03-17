import store from './store'
export default {
  // 添加方法
  addlist(msg){
    setTimeout(()=>{
      store.dispatch({
        type:'ADD_LIST',
        hehe:msg
      })
    },1000)
  },
  dellist(index){
    store.dispatch({
      type:'DEL_LIST',
      hehe:index
    })
  }
}