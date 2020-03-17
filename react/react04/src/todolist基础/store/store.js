import {createStore,combineReducers} from 'redux'
// combineReducers redux 中实现模块化
// applyMiddleware 和react-redux
import reducer from './reducer' 

export default createStore(reducer)
// console.log(combineReducers)