### vuex
全局状态管理
1. 多组件共享状态 多个组件使用同一个数据
2. 任何一个组件发生改变 其他的组件也要跟着发生相应的变化
### 基本使用
0. 下载 npm install vuex
1. 创建全局状态管理的实例
2. 注册
3. 在组件里使用全局状态值 
   a.获取渲染全局状态值
   b.修改全局状态值

#### 5大核心
state 全局状态数据
mutation 规定只有mutation才能修改state 通过commit方法触发
action   可以放异步操作 触发mutation   通过dispatch 触发
getter   vuex里的计算属性 和state值进行关联 state发生改变
         可以重新计算，并且可以在页面上直接使用

#### 最简版
1. 组件里通过 $store.state 获取全局状态数据进行渲染
2. 通过  $store.commit 方法触发mutation 修改全局状态值 整个页面都会变

#### 稍微复杂版
1. 组件里通过 $store.state 获取全局状态数据进行渲染
2. 通过  $store.dispath方法 触发action里的方法
3. action 触发mutation进行修改全局状态值
 
