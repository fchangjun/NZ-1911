import {CHANGE_NAME,CHANGE_AGE}from './actionTypes'
export default{
  [CHANGE_NAME](){
    return { 
      type:CHANGE_NAME,
      payload:'半藏'
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