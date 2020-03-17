import {createStore,combineReducers} from 'redux'
// combineReducers redux 中实现模块化
// applyMiddleware 和react-redux
import todolist from './reducer' 
let reducer = combineReducers({todolist})
export default createStore(reducer)
// console.log(combineReducers)