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
表单的value 被state 值控制 直接无法修改
通过setState进行修改
非受控组件
通过ref 获取表单的数据

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
25. 了解过hooks  
    增强函数组件，让函数组件可以使用类组件的功能（状态和生命周期）
    useState  给函数组件赋予state的功能
    useEffect 给函数组件赋予生命周期的功能  1vs3 挂载 更新 销毁
    userContext  在函数组件里获取上下文

26. 路由
   * hash（哈希） 和历史路由的区别
   * 路由的实现原理  
     * 监听地址栏的改变
     * 根据地址栏的改变渲染组件
   * 线上hash路由和历史路由的区别 刷新之后会404
   重定向 精准匹配  万里挑一  高阶组件  路由传参 声明导航 和编程导航 路由对象 
   push replace go goback goforwd 嵌套路由
27. 全局状态管理
   * 你在什么地方用过全局状态管理 （多组件共享状态 一个组件发生改变其他组件跟着变）
   * 怎么使用的全局状态管理 全局状态管理的使用流程
     * 创建全局状态管理对象 store 
     * 创建reducer 
        reducer 本质是一个纯函数 接受修改前的数据 和actions参数 
        在函数的内部根据 action 对修改前的数据进行修改 返回新新数据
     * 将store对象和reducer 进行关联
     * 在页面上通过 Store的getState 获取全局状态值
     * 用户在组件里触发 actionCreator的方法 创建action 通过dispath 发送给reducer
     * 在需要更新的组件里做subscribe监听 控制组件重新渲染
28. 什么叫纯函数
    输出只由输入决定
29. 使用全局状态管理的时候，应该注意什么
    在reducer  不能修改原数据  导致页面不更新
30. 不能修改原数据的解决方式是什么 
    深拷贝 JSON.stringIfy JSON.Parse() 自己去递归遍历  immutable
    浅拷贝 Object.assign()  ...
31. react-redux  mobx Flux ...
32. 是否了解过react-redux 的实现原理
    通过hoc 和context 对redux 使用进行优化
    connect(mapStateToprops,mapDispathToProps)
33. 你在使用全局状态管理的时候如何处理异步问题 
    异步中间件 redux-thunk redux-sage  redux-promise ...
34. 全局状态管理中将网络请求放在那里 
    1. 放在组件
    2. 放在actions （vue就叫action react中actionCreator）
35. 异步请求放在actions里的好处
    1.便于统一管理请求 减少冗余代码
    2.时间旅行 准备检测到数据的变化
36. 听过hoc ？ 项目中如何做代码优化 ？ hoc都在哪写地方使用
   高阶组件本身就是一个函数 接受一个组价你作为参数 返回一个新的组件
   被高阶组件处理的过的组件 一般在props里获取数据

   可以通过高阶组件封装公有代码 路由拦截器  路由懒加载 react-loadable From.create 
   withRouter

37. 虚拟dom 
    本质是一个对象 该对象和dom元素有相同的结构
    createElement 
    jsx
38. diff 算法  
    数据发生改变 引起虚拟dom改变  对比修改前后2次虚拟dom 寻找出差异点 根据差异点更新真实dom
    原始 diff算法 复杂度 O(n^3)  
    react 优化的diff算法 O(n) 
    1. tree Diff  禁止跨层次对比
    2. component Diff 对比是不是统一类型的
    3. element Diff

    新有老没有  新建
    老有新没有  删除
    老有新也有  移动
39. keys 左右，
    用来优化diff算法的效率
40. 使用什么做为一个key 
    推荐使用唯一不重复 不会变的值作为keys 主键id
    但是在循环中 不涉及到数组下标变化的 用index 也行

项目
 react 管理平台 
 这个项目多少页面？ 
 前台 50个页面  2个前端  25 个页面  50天 
 后台 
1.5到2天一个页面 平均值

1. demo期 2个半月 
2. 优化期  半个月
3. 测试   5天
4. 维护

同一个项目  前台后台都参与   线性开发 不是并行开发

管理平台 
curd 
登录注册  手机验证图片验证 滑动验证 安全验证 薅羊毛 7天免登录 

权限验证 动态侧边栏 
大数据可视化 wq
导出到处excel 
图片上传
会员管理 用户管理 管理员管理
项目优化：图片懒加载 路由懒加载 数据huancun  分析包体积大小 lighthouse gzip ..