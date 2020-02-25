### 什么是vue
前端框架的3马车 
angular  谷歌公司   m(数据)v（视图）c（控制器）   双向数据绑定
react    facebook （非死不可） 视图层的框架view  虚拟dom
vue      尤玉溪  双向数据绑定+虚拟dom
是一套用于构建用户界面的渐进式框架 
入门难度最低
### 为什么要学习vue 
高效 
1.运行效率高 采用虚拟dom 减少真实dom的操作使项目的运行效率大大提高
2.开发效率高 采用了组件化开发 
将开发者的精力从dom操作解放出来，转移到数据操作上

#### 爱上vue 3 5
什么叫做热爱 无时无刻的思念 
写页面使用vue 抛弃原来二阶段的写法（直接操作dom）

### vue的实例化
```
1.下载引入
2.找一个dom元素 这个dom要被vue控制
3.在js中实例化vue
```

### 数据绑定


### 指令 directive 
指令后面跟的都是表达式或者变量 

内置指令 vue内部提供的直接使用
自定义指令 实现自定义某些功能的指令 

条件渲染
 都可以控制一个元素的显示或者隐藏
  v-show  通过样式 display：none 
  v-if    直接控制div元素有还是没有 （v-else  v-elseif）
事件绑定
  使用vue中的事件  
  v-on：事件名（和原生js的事件名一致）:事件的处理函数 
  @事件名:事件处理函数
  事件的处理函数写在实例的配置项 motheds 
  处理函数的默认参数是事件对象
  如果需要传递其他参数 事件对象需要通过`$event 手动传递
属性绑定 
  v-bind
  元素的属性都是跟的固定的值 
  属性绑定可以实现 属性的后方跟变量或者表达式
  v-bind：要绑定的属性名 <img v-bind:src=''>
  :要绑定的属性名  <img :src=''>
列表渲染
v-for 数组 表格 数字  字符串
<td v-for ="(item,index) in/of 数据源"> </td> 
<td v-for ="(value,key,index) in/of 数据源"> </td> 

双向数据绑定 v-model 
v-model 相当于 事件绑定v-on 和属性 v-bind 集合体
将表单元素和data里的数据进行绑定 任何一方发生改变另一方都会跟着变
1. 表单元素可以使用
2. 组件也可用
#### 作业
1. todolist 敲熟
2. 实现一个99乘法表
3. 创建一个表格 
     a.隔行变色
     b.鼠标滑过有特效
     c.写一个下拉菜单 可以控制隔行变色的颜色

v-html 相当于innerhtml
v-text 相当于innerText
#### 自定义指令
全局自定义指令
```
Vue.directive('指令的名字',{
  insterted(el){
    el  自定义指令绑定的元素
  }
})
v-自定义指令的名字
```
局部自定义指定 在哪注册在哪用 
组件和实例都可以注册局部自定义指令
```
new Vue({
  directives:{
    自定义指令的名字:{
      inserted(el){

      }
    }
  }
})
```
#### 组件
1.创建组件 2.注册组件 3.使用组件
局部组件 全局组件 的区分就是注册位置不同
全局的
Vue.component('组件名',{ 组件的配置项})
局部的
new Vue({
  ...
  components:{
    组件名：{
      配置项
    },
    hehe:{
      template:'#hehe',
      components:{
        xixi:{
          template:'#xixi',
          components:{
            ....
          }
        }
      }
    }
  }vue
})
#### 组件的配置项和实例配置的区别
绑定元素   el       template 
数据      data 对象 data 函数
自定义指令 directive  directive
方法      methods    methods
组件  
计算属性
监听
....

#### 组件通信
在组件和实例中自己的数据只有自己可以控制
1. 父子通信 props
   父组件控制子组件 父组件控制自己的数据变化，将变化后的数据通过props自定属性传子组件
2. 子父通信 $emit 
   子组件控制父组件的数据  父组件控制自己的数据变化，将控制函数通过emit自定义事件传递子组件 供子组件调用 
3. 兄弟通信
   亲兄弟
   a.状态提升  父子和子父结合
   远亲状态
   b.事件总线 eventbus 
   c.全局状态管理         

### vue的脚手架工具
将npm镜像换成淘宝镜像
npm install  -g @vue/cli
vue -V  出现版本号
新建一个文件 
进入文件目录 执行 
vue create name (名字随便起)
进入项目目录 执行npm run serve

### 过滤器
数据库时间储存格式  时间戳
时间  2007.10.11   2007/01/11  2007年10月11日 
对数据的处理

1. 全局过滤器 Vue.filter(过滤器名,处理函数)
2. 局部过滤器 组件或者实例里的配置项filters:{过滤器名,处理函数} 

### 监听watch 
watch 是配置项的一种 主要功能是监听数据的改变


### 人生
人生如戏 大悲咒
0-1-0
猥琐发育别浪
入世
打怪升级更新自己
在世
离世
回顾一生 寻找遗憾解决遗憾

#### 生命周期
 4（4个阶段） 8（每个阶段2个钩子函数） 2（缓存的钩子） 1（捕获错误的钩子函数）
vue（实例）组件的一生和人生及其想似

beforeCreate
创建 创建虚拟dom create
created
beforeMount
挂载  虚拟dom 变成真实dom 出现在页面上 在世
mounted 
beforeUpdate
更新  更新数据->更新dom元素
updated
beforeDestory
销毁  组件离世的时候
destroyed

常用 
created 网络请求
mounted 网络请求 初始化dom
beforeDestory/destroyed 组件销毁前擦屁股解决遗憾

### eslint
帮助我们代码更加规范 错误非常多
流派 
tab 2空格 4空格
{} 换行流  
function test(){

} 

function test()
{
  
} 
### 脚手架项目的基本目录
src  源码目录
  main.js 入口文件
  xx.vue  单文件组件
public 公有资源
node_module 依赖包
package.json 项目依赖
readme 项目提示

#### 项目分类
1. spa single page web application 单页面应用  只有一个html
   a.seo优化不好 
   b.首屏加载过慢 首屏白屏
   c.页面切换的用户体验好
2. mpa 多页面应用  多个html

#### 组件切换1 动态组件
<div is = 'hehe'></div> 
is 可以指定渲染的组件名
div 渲染成一个叫呵呵的组件
推荐与component 标签一起使用

#### 组件切换2 路由
监听地址栏的改变 根据改变渲染不同的组件

基本使用
1. 下载安装路由  npm install vue-router
2. 创建路由表  
    a. 引入vue 和vue-router 
    b. 在vue中使用vue-router 
    c. 创建路由实例 确定路径和组件的对应关系
    d. 抛出路由实例
3. 在main.js 注册路由
4. 就可以使用2个组件
 <router-link to  tag  active-class >  
 控制地址栏改变 
 <router-view>  开启一片空间渲染指定的组件

 路由的模式 mode 哈希 和历史
 通过路由表里 mode 设置 
 hash 路由 地址栏中有# 
 history 路由 没有# 和正常使用的类似