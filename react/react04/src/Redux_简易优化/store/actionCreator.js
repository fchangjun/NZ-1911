import store from './store'
export default {
  changeAge(){
    let action={
      type:'CHANGE_AGE',
      payload:88
    }
    store.dispatch(action)
  },
  changeName(name){
    // action 里type是必须的其他的随意
    let action={
      type:'CHANGE_NAME',
      payload:name
    }
    store.dispatch(action)
  }
}