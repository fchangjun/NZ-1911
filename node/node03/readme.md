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

数据库的curd

show dbs  显示所有的数据库
db        当前选中的数据库
use  dbName  
新建一个数据库 如果数据库里没有东西 这个数据库是个临时的数据库  
或者切换一个已经有的数据库
db.dropDatabase() 删除数据库

集合的curd
db.createCollection('集合名字') 在数据库里创建一个集合
show collections 显示该库下所有的集合
db.集合名.drop()
文档的curd
  
