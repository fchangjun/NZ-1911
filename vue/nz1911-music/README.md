# nz1911-music

### 移动端适配（样式方面）
一套代码 在不同的设备上显示基本一样
百分比  媒体查询  flex rem
pc 适配  媒体查询(栅格 栅栏)+百分比 
移动适配  rem+flex 
核心思路 ： 尺寸和rem的关系
1.将根元素的字体大小设置为 屏幕宽度的10%
2.结合less的mixin实现适配

设计分比率 iphone6s 375*667     750*1134

### 兼容问题 js
swiper 3 4 5 (低版本ios只能用swiper3)
css h5   websocket 
...

### 预处理语言 less sass stylus


### 命名规范
1. 文件夹的命名 小写字母连接符的命名方式  my-demo 
2. 文件的命名   首字母小写字母 小驼峰 或者也是用连接符  my-demo.js  myDemo.js
3. 组件和类文件和文件夹  大驼峰    MyBanner.vue   MyBanner.js 
4. index.js  index.vue  
   在模板中  -+小写字母 = 大写字母  less-demo = lessDemo

### 网络请求
ajax 原生ajax
jq   不推荐
fetch 
axios  
1. 通过配置 devServer.proxy 解决跨域问题
2. 将axios进行二次封装  使用拦截器
3. 将axios 挂载到vue的原型上 在组件里使用不需要引入

### 移动端滚动插件 better-scroll 
1. 外层视图层 一定固定宽高
2. 容器层  尺寸大于视图层 不然滚不起了
3. 初始化 
```
<div>  固定宽高
   <div>
       内容超出容器
   </div>
</div>

new BS('最外层的视图元素',{})
```

### 轮播图
### 前端的功能
1. 获取网络数据
2. 根据网络数据渲染界面 
3. 用户的交互

### 图片懒加载 
一次加载过多的图片  是首页加载过慢  
用多少加载多少
npm install  vue-lazyload

### jsonp的请求与封装

### 绝对路径的别名 alias


### 减少网路请求
1. 数据本地化 （将数据存到本地存储 cookie localstorage ...）
   a.发起请求 查看本地有没有数据
   b.本地有数据 读取本地  不需要网络请求
     没有本地数据  发起网络请求 将数据存到本地
   问题：
     数据的更新 
   解决方案
     1.给本地数据设置过期时间  10min   
       存入数据的时候同时存入过期时间
       取数据的时候和过期时间作对比
     2.用户主动的刷新数据  下拉刷新的操作
### 下拉刷新 和 上拉加载
  通过better-scroll 实现
  下拉刷新  下拉滚动层触及顶部 重新请求一波数据
  上拉加载  上拉滚动层触底 请求下一页的数据 （分页）
### keep-alive 只有在vue中可以用 
 缓存页面 
 在需要缓存的组件外部 加上keepalive 
 <keep-alive>
 组件的切换 路由  动态组件 
 </keep-alive>
 内部的组件就会被缓存
 actived 激活触发
 deactived 失活触发
 include='a,b' 名字叫a,b 的组件会被缓存
 exclude='a,b' 除了a和b其他的组件缓存
 a 需要在组件创建的时候通过name属性指定
 
 ### 动态路由 动态导航 
 {
   path:'/singer/:id'
   componet:Singer
 } 
 直接修改动态导航时不会已引起组件的重新创建 组件是复用的
 组件内的守卫
 beforeRouterEnter  进入组件之前
 beforeRouterUpdate 
  当前组件路由发生修改 
  动态导航修改组件复用不会重新创建销毁
  监听路由发生改变
 beforeRouterLeave  组件离开的时候触发

### spa 首屏加载白屏问题
spa 会将所有的组件一次打包加载 加载过程中页面白屏
npm run build 编译打包
路由懒加载 异步引入组件 将组件实现按需引入

### ui框架
[框架集合](https://shimo.im/doc/LkpdnWxM1j40BDJj/)
1.下载安装
2.引入 js 和 css文件
3.照着官方文档赋值粘贴

### 项目 
1. 产品原型图 ui设计图 （自己从网上找）
2. api接口文档
   a.node+mongod 自己来写后端接口 
   b.扒拉别人的接口 （没有安全验证）可以直接调用
                    有安全验证   将数据保存成本地文件 自己返回
3.mock.js 写假数据 
  easy-mock 
  yapi
### 项目上线 
1. npm run build 打包
2. 将dist目录丢到服务器上去

### 买一台服务器
花钱买服务器
设置密码 
用户名默认是root 
管理平台 获取公网ip 
在命令行  
```
ssh root@公网ip 
回车之后
输入密码
```
如果没有ssh 命令 安装 xshell 工具