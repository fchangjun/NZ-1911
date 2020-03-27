import {CHANGE_TOKEN_MODAL} from './actionTypes'
export default {
  changeTokenModal(boolean){
    return{
      type:CHANGE_TOKEN_MODAL,
      payload:boolean
    }
  }
}