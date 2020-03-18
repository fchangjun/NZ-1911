### redux 全局状态管理 

### react-redux 
优化模块 优化redux的使用过程

```
npm install redux react-redux 
```
1. 通过react-redux 提供的provider提供器 将全局状态对象挂载到根元素的上下文上
```
import Provider from 'react-redux'
import store from './store/store.js'
...
<Provider store = {store}>
  <App></App>
</Provider>
...
```
2. 在组件中使用全局状态值
   通过react-redux 提供的connect 从跟组件的上下文上获取store对象，
   通过高阶组件将获得到的store传给目标组件的props
```
  import {connect} from 'react-redux'
  class Son1 ... {}
  connect(state=>state)(Son1)
```
 3. 组件中修改全局状态值  不需要写组件监听
    组件 -> actionCreator -> redcuer ->组件（监听更新）
    1. 组件的里的监听不用写了 
    2. actionCreator 默认做两个事情1.创建action 2.通过dispath 发送action 
       actionCreator 使用插件之后只要 创建action 
    3. 在组件里发送


#### react-redux 中异步action
解决方式通过异步中间件 redux-thunk  redux-sage redux-promise  ....
1. 安装异步插件  npm install redux-thunk 
2. 在store.js 引入并使用
```
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //解决异步的插件
import reducer from './reducer'
export default createStore(reducer,applyMiddleware(thunk))
```
3. 除了actionCreatore 需要修改之外 其他的都不用动 
   a. 如果是同步的方法也不需要动 返回action
   b. 如果action里有异步 返回一个函数 函数能接受dispath 在函数内部 做网络请求
      成功之后通过dispath手动的发送
   ```
   {
      addlist(){
         let action ={} 
         return action 
      },
      dellist(){
         return(dispatch)=>{
            <!-- 网络请求 -->
            setTimeOut(()=>{
               let action  ={} 
               dispatch(action)
            }，1000)
         }
      }
   }
   ```     
 