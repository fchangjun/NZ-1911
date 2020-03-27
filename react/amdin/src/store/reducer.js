import state from './state.js'
import {CHANGE_TOKEN_MODAL} from './actionTypes'
export default (prestate = state ,actions)=>{
  let newData = JSON.parse(JSON.stringify(prestate))
  
  let {type,payload} = actions 
  switch (type) {
    case CHANGE_TOKEN_MODAL:
       newData.tokenModal = payload
      break;
  
    default:
      break;
  }
  return newData
}