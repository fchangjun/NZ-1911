import {CHANGE_NAME,CHANGE_AGE}from './actionTypes'
export default{
  // 同步的写法
  // [CHANGE_NAME](){
  //     return { 
  //       type:CHANGE_NAME,
  //       payload:'半藏'
  //     }   
  // },
  //异步的写法
  [CHANGE_NAME](){
    //dispatch connect 传递而来
  return(dispatch)=>{
    setTimeout(()=>{
      let action ={ 
              type:CHANGE_NAME,
              payload:'半藏'
            }   
      dispatch(action)
    },1000)
  }
    },
  [CHANGE_AGE](){
    return{
      type:CHANGE_AGE,
      payload:99
    }
  },
  addlist(){
    console.log(111)
  },
  dellist(){
    console.log(111)
  }
}