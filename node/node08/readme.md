股票 阳台 天台
跌买高卖 k线图 
通过ajax 请求数据渲染k线图数据 10min 

12：00    1块买入
12：10    10块钱
12：15    0.001元 
12: 19    看到10元  实际0.001元  卖了

数据的实时性 
1. 轮询 每隔多长时间发起一次请求  0.5s  短连接
2. 长连接 
服务器端主动推送信息 长连接
站内信 人人 qq空间  博客 主动弹出聊天框
抽奖

长连接  服务器端主动推送信息，客户端发送信息
短连接（ajax） 客户端主动发起请求 服务器端响应信息

#### 实现方式
1. node 中的内置模块  net 
2. h5新增的特性 websocket  有兼容性问题 使用贼方便
3. socket.io   第三方库    没有兼容性问题 使用稍微麻烦一丢丢   

##### websocket 实现长连接 
任何一个长连接 由俩部分组成 客户端 服务端

服务端
1. 引入模块 创建长连接服务器
2. 监听客户端连接 
3. 向客户端发送消息
4. 接收消息
5. 服务主动断开连接
6. 监听客户端断开连接
客户端
1. 创建长连接对象
2. 与服务端进行连接
3. 接受消息
4. 向服务端发送消息
5. 处理服务器端断开连接
6. 主动断开连接

#### 发布中奖信息
1.电商网站 用户访问 
2.定向的发送中间信息 后台运营人员
#### 在线聊天室
1. 创建客户端服务端
2. 客户端连接上 服务端需要保存 客户端信息要和用户名一块保存
3. 将消息发送到服务端 ，推送给除自己外的其他人

#### 通过socket.io 创建长连接
1. 安装模块
npm install socket.io
服务端
a. 创建socket服务端
b. 等待客户端连接
c.  emit(客户端定义的事件,参数)
b.  on('自定义事件',()=>{}) 接受客户端的数据


前端  
需要找一个文件 socket.io.js  
node_modules/socket-client/dist/socket.io.js 
1.连接服务器
2.通过 on('自定义事件') 接受服务端的消息
3.通过emit 触发服务端的事件发送消息 

#### 区别
websocket 
  前端h5新增的特性 不需要引入文件 
  使用方式简单 message接受消息 send 发送消息
  低版本浏览器用不了
socket.io 
  第三方库  需要引入文件
  使用方式稍微困难   on 自己定事件 emit 触发事件
  没有兼容性问题

##### express 生成器
帮助我们快速的搭建一个express 项目
1. 全局安装
```
$ npm install express-generator -g

express --version 查看版本

```
2.创建项目 并且制定模板引擎
```
express  项目名  --view=ejs 
```
3.进入项目目录 安装依赖
4.运行项目
```
debug 模式运行
DEBUG=wangyi:* npm start
线上模式运行
npm start
```

#### 模板引擎  ejs
 (ejs|hbs|hjs|jade|pug|twig|vash)
1. 服务器渲染相关
2. 前后端分离 ajax
#### 基本使用
1.下载安装 npm install ejs 
2.app.set('view engine','ejs')
3.在默认views 文件内  创建模板文件 将html后缀名变成 xx.ejs 
4. res.render('模板文件',{要渲染的数据})
5. 在模板中  <%= 要渲染的数据%>


##### 复习总结 写接口
1. node 是什么
2. node的模块
    内置   fs path  http ...
    第三方模块  cors  request  nodemailer bodyparser  multer ....
    自定义模块
3. 数据库 mongodb 
   mongoose 
4. 后端api接口 curd 
   文件上传 文件验证
   接口的三要素
   ajax post 上传的数据类型
   jwt 
   分页
   apidoc 动态产生api接口文档
5. 长连接