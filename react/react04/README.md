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
