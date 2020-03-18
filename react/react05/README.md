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
