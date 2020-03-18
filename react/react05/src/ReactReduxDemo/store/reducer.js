import {CHANGE_NAME,CHANGE_AGE} from './actionType'
let State ={
  name:'韩梅梅',
  age:16
}

export default (prevState = State,actions)=>{

  let newData = JSON.parse(JSON.stringify(prevState))
  /*
  1.修改引用类型的数据的时候 会导致修改到原数据
  2.新数据和老数据对比 发现没有变化 页面不更新
  */ 
  let {type,payload} = actions 
  switch (type) {
    case CHANGE_NAME:
       newData.name = payload
      break;
    case CHANGE_AGE:
       newData.age= payload
      break;
    default:
      break;
  }

  return newData
}