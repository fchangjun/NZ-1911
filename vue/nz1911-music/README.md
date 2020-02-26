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
