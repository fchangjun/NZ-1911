import {CHANGE_NAME,CHANGE_AGE} from './actionType'
let State ={
  name:'韩梅梅',
  age:16
}

export default (prevState = State,actions)=>{

  let newData = prevState  

  let {type,payload} = actions 
  switch (type) {
    case CHANGE_NAME:
       newData.name = payload
      break;
    case CHANGE_AGE:
    
      break;
    default:
      break;
  }

  return newData
}