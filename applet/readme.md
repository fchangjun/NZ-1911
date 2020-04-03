前端矩阵 

原生开发
  app 前端  c/s 苹果手机 oc swift  安卓 java 安卓
  游戏 前端  c++ c# lua  javascript 
  软件（pc） 前端  c++ python ....

网页 前端  b/s  javascript 
小程序 前端 javascipt 

###  市面上的小程序 
微信小程序  v
支付宝小程序
抖音小程序
百度小程序
微博小程序 
qq小程序
...

### 微信小程序
1. 原生开发  用wx小程序 提供的语法开发 --我们要学习的
2. vue开发  用vue结合框架写小程序 uni-app wepy mpvue  
3. react开发  用react taro 框架开发
4. angular开发   ？？？？

### 目的 
一周时间 使用wx小程序开发 电商平台
1. wx小程序基础 1-1.5 
2. 电商项目    3-3.5天 
    1. api 接口
3. 打包上线   10分钟
    1. 需要服务器
    2. 需要一个域名 
    3. ssl 认证

公众平台官网：https://mp.weixin.qq.com/


1.网页运行在浏览器，小程序运行在哪里？
小程序不是运行在浏览器上的，小程序是运行在微信上的（webview）
浏览器在小程序开发过程中没啥用，dom bom  window对象 小程序都没有
标签 div  span  小程序里没有 网页的标签 
npm 下载插件包  小程序不能使用npm 下载的网页的插件包 只能用专门为小程序

下载开发者工具 创建初始项目  不要选云开发

### 小程序的框架
xxx.json  小程序或者页面配置
xxx.js    写js业务逻辑
xxx.wxml  wxhtml 用的是wx内置的组件 
xxx.wxss  wxcss 微信的样式

小程序都需要一个app实例 （根实例）包含了若干个页面（实例）
<!-- vue  有一个跟组件 跟组件里有一堆页面组件 -->
## 小程序基本目录结构
app.js  小程序的实例 小程序的入口文件
app.json 小程序的全局配置
app.wxss  小程序的全局样式
pages  小程序里的页面
-home   home页面
  |   
  home.js home页面实例
  home.json  home页面的配置文件
  home.wxss  home页面的样式
  home.wxml  home的页面骨架
-my     我的页面
 ....

 ### 小程序中的样式
 app.wxss 全局样式
 pageName.wxss 页面的局部样式 
 样式使用正常css的使用
 全局和局部冲突就近原则
 响应式 没有rem rpx 
 小程序规定 不管什么手机 with 恒定为 750rpx 小程序设计稿的尺寸 750*1136
 或者vw wh
 无法直接预处理语言
 ### 小程序的页面骨架
 xxx.wxml 文件 不用html标签元素
 只能使用小程序内置的组件标签 详情见文档
 ### 小程序的配置 详情见文档
 app.json 全局配置
 pageName.json 页面配置 
 全局和局部冲突就近原则

 ### 小程序逻辑 
 1. 小程序的生命周期 
    小程序启动
    小程序隐藏
    小程序显示
 2. 页面的生命周期 
     页面加载
     页面卸载 
     页面显示
     页面隐藏
     页面渲染结束
    
### 小程序的数据绑定 
page({
  data:{
    ...数据
  }
})
页面对象下 data里的数据可以通过{{}} 在视图中进行绑定
如果要修改数据  页面实例(this).setData({要修改的key:value})

### 事件
小程序的事件是特制事件和原生js不一样  tap  longtap ..
处理函数卸载js文件
传参是以data开头的属性进行传参 在事件对象里进行接受
```
<button bindtap="处理函数"
 data-hehe='123'
 data-obj="{{ {us:123,ps:456} }}
 data-arr = "{{ [1,2,3,4,5] }}"
></button>
```
### 小程序中的指令
wx：for
wx：if

### 小程序中的网络请求
js 原生ajax 
jq 的ajax 
axios vue react 
requrest 模块
以上方式在小程序全部无效  
在网页上发起请求 js jq axios 都需要http请求对象 都是基于window对象 小程序就没有window对象

小程序的网络请求 使用的是内置的wx.request api  使用方式类似于jq的ajax 
发布线上的要求
1. 请求的域名必须是https协议
2. 请求的域名必须在合法域名列表里
3. 小程序没有跨域问题
开发环境下 没有https 没有域名的合法列表
忽略 https 安全域名的验证

将wx.request 进行二次封装 
axios.post()
axios.get()
asiox.delecte()
.....

网络请求的回调里 经常会找不到this 换成箭头函数就行了

### 小程序路由 
1. 控制页面跳转
2. 传递参数