### 作业
1.通过路由实现一个tab切换的效果
2.通过高阶组件实现路由拦截器

### 全局状态管理 

#### Vue全局状态管理 vuex 
state  mutation  action  getter module 辅助函数

#### redux 
多组件共享状态，一个组件发生改变其他的都要变

在电视上剧里活不过3集 甄嬛传 
慈禧太后 -> 光绪帝 -> 卖地求荣 ->闭关锁国 -> 垂帘听政 

安装redux
```
npm install redux
```
角色划分

皇帝    store  传递奏折 发布政令
老佛爷  reducer  接受奏折 根据局奏折批阅
平民百姓 component  使用数据 修改数据
文武百官 actionCreator  提交奏折给老佛爷  

##### 多组件共享状态 
1.创建小皇帝 store 并且和老佛爷关联
2.创建老佛爷  
3.在组件中使用
  a.引入小皇帝
  b.使用小皇帝下的getState方法，getState方法获取的值就是老佛爷返回的值
##### 一个组价组件改变其他组件都要变
1. 创建actioncreatore 本质是一个对象 对象里有一堆的函数
  在内部的函数
  a. 创建action 也是一个对象必须有type 
  b. store.dispatch(action) 提交action给老佛爷
2. 老佛爷根据参数里修改前的数据和action 对数据进行修改 并且返回修改后的数据
3. 数据更改了但是页面不会发生改变 
   通过 store.subscribe(()=>{
     this.setState({})  更新界面
   })监听全局状态值发改变

#### redux 模块化
#### redux 异步处理
同vuex中一样 可以将网络请求放到actionCreatore 
1. 减少重复的代码 统一管理api接口
2. 时间旅行 更精准的检测到全局状态值的变化
#### 样式作用域的问题
在react中样式没有作用域 ，当不同组件类名重复又的时候 导致样式覆盖