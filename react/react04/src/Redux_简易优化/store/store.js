import {createStore} from 'redux'
import Reducer from './reducer'
let Store = createStore(Reducer)
export default Store