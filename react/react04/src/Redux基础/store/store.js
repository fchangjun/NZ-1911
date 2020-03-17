// 这里是小皇帝
import {createStore} from 'redux'
import reducer from  './reducer'
// 将老佛爷和小皇帝进行关联
let store = createStore(reducer)//创建全局状态管理对象
export default store