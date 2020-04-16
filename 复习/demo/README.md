### 面试问题的来源
* 公司中自己遇到的问题  看命 提供一个思路
* 网上流传的面试题     看懒  思否  掘金 简述 公众号 ...
* 从面试者简历和交流过程中发现的问题  别给自己挖坑 可以引导


1. 使用的react版本  vue antd mint-ui
   * 根据项目时间 去查版本的更新文档
   * 企业以稳定为主 会追新
2. 项目如何从0-1 
   * 架构
   * react-cli 还是自己搭建的webpack
3. 如何通过webpack搭建脚手架工具
   * 入口  
   * 出口
   * 插件
   * loader 
4. react15版本和16版本有什么区别
   * 生命周期的改变
   * 组件创建方式的改变
   * 渲染方式的改变

5. 生命周期的改变
6. 组件创建方式的改变
    React.createClass() 
    class Component extends Component{

    }
7. 渲染方式的改变

8. 组件的分离
函数组件 无状态组件 木偶组件 ui组件
类组件 有状态组件  智能组件 功能组件

受控组件
非受控组件
高阶组件

9. react数据承载类型
 props 来自于组件外部 在组件内部智能使用不能修改 
 state 属于组件内部   可以进行修改
10. 单向数据流
数据只能从外向里，而不能从内部流向外部
11. 如何修改state值
12. 如何理解setState这个api setState有什么特点
   * react数据跟新页面不会渲染 需要通过setState 触发render的再次执行
   * setState 是一个异步函数
   * setStete 参数1 更改的数据 参数二是修改成功的回调
   * setState在使用的时候会进行合并操作，连续执行setState只会执行一次rendner 
   * 在异步中执行setState 都会执行性render 
     
13. react 中如何绑定该数据 
    * {}
    * 不能放对象
    * 条件渲染 列表渲染 属性绑定className  事件绑定 onClikc={this.test.bind(this,...)} 
14. Fragment 
    react 提供的一个组件 作为容器使用 不会页面进行渲染

15. 如何实现组件通信
    父子通信 props（属性） ref
    子父通信 props （方法）
    兄弟通信 状态提升 context 全局状态管理

16. 什么叫状态提升
    将state放到公有父元素上 结合父子与子父实现通信
17. 上下文是什么?怎么用？解决了什么问题
    * 跨组件通信 
    * 创建上下文对象
    * 通过上下文对象在父组件注册一个数据
    * 在子组件（任何一个子组件）将上下文对象挂载到 该组件静态属性contextType上 就可以使用父组件提供的值  
18. 如何实现在嵌套的子组件里修改上下文数据
    * Consumer上下文对象的api 
    * 用Consumer 组件包裹要渲染的组件
    * 用Consumer组件里渲染一个函数
    * 函数的参数就是在父组件提供的 数据
    * 在函数里返回要渲染的jsx
19. 改变this指向
 将函数放入到目标对象的内部
20. react有哪些生命周期
    初始化 
        getInitialState 
        getDefaultProps 

        contrustor 构造函数
    挂载
        componentWillMount 
        componentDidMount  
    更新 
        componetWillUpdate 
        componentDidUpdate 
    销毁
        componentWillUnmont
    数据改变 
        componentWillReceiveProps 
        shouldComponentUpdate 
    
21. react中常用哪些生命周期，都用来干什么 
        contrustor 初始化数据
        componentDidMount 来做副作用（网络请求）
        componentWillUnmont 擦屁股 销毁全局监听计时器 。。。
        shouldComponentUpdate  控制render函数是否执行
22. fiber相关 分片
  * react中副作用放在哪个生命周期里
       componentDidMount  
  * 副作用为什么不放在componentWillMount里
  * 生命周期有哪些变化
  * react15版本和16版本渲染机制有哪些差异
  * 是否听说过同步渲染和异步渲染
  * 了解过react fiber
  * react新增哪些生命周期

  react 15版本之前渲染方式是同步渲染  导致页面的卡顿
  16版本之后渲染核心引入fiber 异步渲染 
  fiber 将一个时间超长任务分段 解决页面卡顿问题
  
  fiber 组件的渲染分成了2个阶段  z
   
   第一个阶段：可以被其他优先级高任务打断 render之前的都可以被打断 
   打断之后就会重新执行
    componentWillMount  17版本废弃
    componponetWillReceiveProps  17版本废弃
    componentWillUpdate   17版本废弃
    getDerivedStateFromProps  数据变化的时候触发
    getSnapshopBeforeUpdate   更新前触发
    shouldComponentUpdate
   第二阶段 ：不会被打断 render 之后的生命周期都是第二阶段

[知乎](https://zhuanlan.zhihu.com/p/26027085)
  1个组件 0.01s 
  2000个组件 20s
 
23. 组件渲染过程中 子组件挂载总是于父组件

24. 在react组件渲染中做过哪些优化
    shouldComponetUpdate  控制组件是否重新render
    <PureComponet>

路由
全局状态管理
项目
