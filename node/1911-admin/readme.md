### 中间件 middleware （拦截器） 中间的插件

中间件的本质是一个函数 
常用的情况下有三个参数 req  res next

中间件的分类

1. 自定义中间件  自己写的
2. 内置中间件    静态资源路径就这一种
3. 第三方中间件  cors body-parser 别人写好的我们来使用


### 跨域
浏览器的同源策略
jsonp  script 里的src不受同源策略影响  需要提供接口的后端参与
cors   设置请求头 需要提供接口的后端参与
服务器代理 （正向代理 反向代理） 服务器之间的请求没有跨域问题
长连接 
。。。

### 路由
根据路径将代码进行拆分模块化

1、将相关的api放到一个路由里

```
创建一个 userRouter.js文件
const express = require('express')
const router = express.Router()
router.get('/login',(req,res)=>{
  ....
})
module.exports= router
```
2.server.js文件引入
```
const useRouter = require('./router/userRouter')
app.use（‘/user’,useRouter）
```
### 数据库
关系型数据库  mysql  甲骨文 。。。
非关系型数据库   redis mongodb （文档型） nosql

mongodb 数据库的名字
mongod  命令行的一个命令 启动数据库
mongo   命令行的一个命令 命令行里连接数据库
mongoose 第三方模块 node来连接数据库的

#### 环境配置
1. 下载安装mongodb
2. 一直安装 install compass  对勾 千万别选
3. 运行 mongod 指令  启动数据库  (先运行第四步)
4. 运行mongo 指令   在命令行连接数据库
5. show dbs  能显示默认数据库 大吉大利 今晚代码
注意：
  1.xxx不是一个内部命令  环境变量的问题
  2.mongod 指令运行不起来 缺少数据库文件  c：/data/db 

mongod --dbpath 文件路径   指定数据保存目录
#### 基本命令 curd
数据库>数据表(集合 collection)>数据(文档 document)

#### 数据库的curd

show dbs  显示所有的数据库
db        当前选中的数据库
use  dbName  
新建一个数据库 如果数据库里没有东西 这个数据库是个临时的数据库  
或者切换一个已经有的数据库
db.dropDatabase() 删除数据库

#### 集合的curd
db.createCollection('集合名字') 在数据库里创建一个集合
show collections 显示该库下所有的集合
db.集合名.drop()

#### 文档的curd

+ 查询操作
  db.集合名.find()  查询所有的数据
  db.集合名.find().pretty()  查询数据并格式化
+ 添加操作
  db.集合名.insert(要添加的数据对象) 添加  默认主键是 _id 不能重复的
  db.集合名.save({要添加的数据对象})  要添加的主键_id是不存在的时候  save 相当于插入
+ 修改操作
  db.集合名.update({找到要修改数据的条件},{$set:{要改成什么样}},{multi:true}) 参数3控制修改全部还是一条
  db.集合名.save({要修改的数据}) 修改数据里的主键_id 如果已经存在表示修改
+ 删除操作
  db.集合名.remove({要删除数据的查询条件}) 

+ 查询条件
  1. 固值查询 固定字段查询值
  2. 范值查询 某一个查询范围  $gt $gte $lt $lte $ne
    ```
    db.user.find({age:{$gt:5}})
    ```
  3. 交集查询 and
     db.user.find({$and:[条件1 条件2 ...] })
  4. 并集查询 or
     db.user.find({$or:[{},{}]})
+ 限制条数
  db.user.find().limit(2) 
+ 跳过
  db.user.find().skip(2)
瀑布流 分页  上拉加载
5 条数据 一页显示2条 3页
pageSize 每页多少条数据  page 当前的页码数

1    db.user.find().skip(0).limit(2)
2.   db.user.find().skip(2).limit(2)
3.   db.user.find().skip(4).limit(2)

db.user.find().skip((page-1)*pageSize).limit(pageSize)


#### node 操作数据库 mongoose
 1.连接数据库
 2.创建连接对象 错误监听  第一次连接的监听
 3.创建schema对象   数据表头
 4.将schema对象转成数据模型 和数据集合做关联（集合名复数形式）
 5.数据模型对象执行增删改查操作

### 上传图片的功能
#### 将图片整个的数据上传到服务器
将本地的图片  file：协议访问 上传到服务器上去 http 协议来访问
1.前端的实现
  1.通过input 文件域选择图片
  2.上传图片 formdata格式 将图片数据添加到formdata对象里
  3.通过ajax 调用接口上传图片 
    a.contentType false 取消默认上传类型
    b.processData false 不对数据做格式化处理
2.后端的实现
  将本地的图片上传到服务器的静态资源路径里
  multer 相当于一个中间件 处理文件上传 req.file (req.files) 获得图片相关的数据信息
  文件上传必须用post方法
  ```
  const multer = require('multer')
  const uplaod =multer({})

  app.post('/file',uplaod.single('hehe'),(req,res)=>{
    req.file 上传的文件信息  文件的数据 buffer 文件的类型 文件的大小  文件原来文件名
    将文件的数据写入到静态资源目录里
    1.文件名不重复 时间戳+随机数
    2.限制上传的类型 gif  png  jpg
    3.限制上传的尺寸
  }) 
  ```
#### 将图片变成base64字符串
base64 是一种数据格式 就是一个字符串可以当成图片来使用

  #### 内网穿透 
  将局域网映射到外网 natapp 12元

#### 管理平台功能需求
1. 添加菜品
2. 删除菜品
3. 修改菜品
4. 查询菜品 
   分页查询
   模糊查询
   分类查询


  #### nodemon 插件
  npm install nodemon -g 
  nodemon 要执行的文件 

  #### 通过apidoc 插件生成接口文档
  将代码注释（必须符合规范） 变成接口文档
  1. 全局安装插件
  npm install apidoc -g
  2. 按照规范写注释 
  3. 创建 apidoc.json 的文档 项目的根目录下 server.js
  4. 执行编译命令
     在 apidoc.json 的目录下执行命令
     apidoc -i 写注释的文件夹路径  -o api文档的导出目录 
     apidoc -i  ./router  -o  ./doc

#### 登录注册
1. 管理平台不需要注册功能 超级管理员分配账户 管理员管理