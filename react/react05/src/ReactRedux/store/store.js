import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //解决异步的插件
import reducer from './reducer'
export default createStore(reducer,applyMiddleware(thunk))