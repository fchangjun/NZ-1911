1. 手写一个prototype原型链的使用案例
   原型和原型链 具体的使用案例
    函数 prototype 
    对象 __proto__
    axios  小程序  手写bind call 
2. vue-cli 工程下文件目录作用
    dist 打包后的文件 
    public 公有文件 图片 spa入口index.html页面 
    src  源码目录
      api       统一管理项目里的api接口
      utils     自己封装的工具与类  axios localStoage
      pages     整体页面组件
      styles    全局样式文件 less
      components 公有组件
      config    项目相关的配置 
      router    路由
      store     全局状态管理vuex
      assets    资源文件
3. 如何实现路由懒加载?why 
   将组件的同步引入变成异步引入
   ```
   import Home from './pages/home'
   const Home = ()=>{import './pages/home'}
   ```
   同步引入组件会将所有的组件文件打包到一个js文件中导致资源过大 加载慢
4. 页面刷新时如何实现vuex数据缓存
   全局状态管理 （全局变量） vuex+localStorage 
   ```
    state:{
      name:localStorage.getItem('name')||'韩梅梅'
    }
   ```
5. 在vue中使用本地图片有什么要注意的地方
   1. 图片在public 使用图片要用根路径 属性绑定 或者 字符串路径都可以
   2. 如果在其他路径下 使用相对路径  属性绑定前（通过import 引入图片） 字符串路径依然可用
6. keep-alive 有什么用，请描述一个使用场景 
     缓存页面 被缓存的页面不会销毁和重新创建  acitveted  deactived   减少网络请求 减少组件加载次数 提高运行效率
7. 书写一个时间过滤器 
   filter 理发店 全局过滤器 局部过滤器
   ```
   Vue.filter('过滤器的名',(data)=>{
     data 要过滤的数据
     return 处理过的数据
   }
     )
  {要过滤的数据|过滤器名()}
   20/4/20  20.4.20
   ```
8. vue打包命令是什么？vue打包后会生成哪些文件？
   npm run build 
   index.html 
   css 
   js
   xxxx.map sourceMap
9. 列举一下工作中常用插件，阐述其使用场景
   axios  sheetjs better-scroll  swiper  webstorage qrcode qs (querystring)
   request randomString  cheerio nodemailer 。。。 bodyparser cors
10. 如何实现移动端适配,pc端适配 
    响应式布局 
    一套页面pc可以看 h5页面也可以看 pad也可以看  bootstrap ->栅格系统 ->媒体查询 
    限制 pc的页面元素 要和移动基本类似  适合官网纯页面展示

    pc是一套代码 移动h5是一套代码 通过navigator.userAgent 判断是移动端设备和pc浏览器设备

    pc端适配 0  容器宽度不变是最小尺寸 产生滚动条 min-width 百分比缩放 max-width 容器保持最大尺寸不变 两端产生留白
    移动端适配：弹性盒布局+rem
    
    rem淘宝flexible方案
11. vuex 是什么？ 如何使用？
    全局状态管理 1.多组件共享状态  2.一个组件改变其他组件跟着改变
    state mutation action  getter module 辅助函数
    * vuex里的异步问题 将异步放入actions  
    * 异步action优点  统一管理网络请求 便于检测事件旅行
    * mapState mapGetters 和值相关 映射到computed 里
    * mapActions mapMutation 和方法相关映射到methods
12. vue-router有哪几种导航钩子，路由守卫 路由拦截器
    * 全局前置守卫
    * 全局解析守卫
    * 全局后置守卫
    * 路由独享守卫
    * 组件内的守卫
      * 组件进入
      * 组件更新
      * 组件离开
13. 计算属性的缓存和方法调用的区别
   计算属性由缓存型 只有相关的属性发生改变才会引起计算属性的重新计算
   方法 只要数据变了 就会重新执行
14. vue等单页面spa应用及其优缺点，如何改进
    优点 1.组件化开发 组件复用开发效率高
        2.页面跳转流畅
    缺点 1. 首屏加载过慢
        2. seo优化不好
15. vue.js的两个核心是什么？
     1. 组件化  2.数据驱动
16. 列举一下vue的生命周期 与使用场景
    4 8 2 1
    创建
    beforeCreate 
    created    网络请求
    挂载 
    beforeMount  网络请求
    mounted 网络请求  初始化操作
    更新 
    beforeUpdate   死循环
    updated
    销毁
    beforeDestory  擦屁股
    destoryed 
    缓存
    activeted   激活触发
    deactived   失活触发
17. webapp 与 app有什么区别
     app c/s
     webapp b/s 
     * 你项目中做过app嘛？如何做的
     * 原生开发 咱不会  混编开发 5+ Dcould 的H5plus apicloud cordova
     * 原生安卓 原生ios  我们写页面 写完页面源码给原生
     * 调用过哪些硬件的功能
18. 列举vuex 中的辅助函数
19. vue中遇到过什么问
    * 点击300 延迟
    https://blog.csdn.net/qq_34986769/article/details/62046696
    * v-if和ref
    * 前后端交互交互
    * 兼容 1px 2px 3px  ios 有一个回弹阻尼（在根元素上吞噬touchMove）
    https://blog.csdn.net/weixin_30764771/article/details/98900070 
    * 数据变页面不变 
    * 使用keep-alive 跳转回来 页面位置回到顶部
    * watch监听不到数据改变
    * nextTick
20. vue中如何解决跨域问题，有什么确定，如何改进。
21. vue的响应式原理是指什么
22. 阐述一下vue中组件如何通信
23. vue.set() 函数有什么用
24. vue.nextTick() 函数作用
25. 简述工作中做过哪些前端效率优化
26. 当在地址栏数入网址 到vue页面显示都经历了什么
   1.  发起请求 获取首页文件
   2.  运行解析获取的首页文件 并逐步渲染 首页
   3.  加载对应的资源
   4.  vue react 开始进行计算  渲染组件