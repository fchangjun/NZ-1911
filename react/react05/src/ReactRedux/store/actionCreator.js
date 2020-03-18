import  {CHANGE_NAME,CHANGE_AGE}from './actionType'
export default {
  // changename(){
  //   let action={
  //     type:CHANGE_NAME,
  //     payload:'李雷雷'
  //   }
  //   Store.dispatch(action)
  // }
  [CHANGE_NAME](){
    let action={
      type:CHANGE_NAME,
      payload:'李雷雷'
    }
    return action
  },
  [CHANGE_AGE](){
    let action={
      type:CHANGE_AGE,
      payload:88
    }
    return action
  }
}