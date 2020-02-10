node 的特点
1.非阻塞的i（input）/o(output)模型
通过异步回调将阻塞操作变成非阻塞
一般情况下 io操作都是阻塞的（网络请求(同步和异步) 文件操作 数据库操作...）
2.事件驱动

该特点决定了nodejs 适合于处理高并发

#### 环境配置
安装
  1. 直接安装
  2. 通过nvm安装
  ```
   nvm list 查看安装过的所有node版本
   nvm install 版本号  
   nvm uninstall 版本号
   nvm  use  版本号
  ``` 
  [nvm下载链接](https://github.com/coreybutler/nvm-windows/releases) 

npm 
  ```
   初始化项目
   npm init  
   npm init --yes

   下载包
   npm install jquery --save-dev 下载开发依赖  开发环境
   npm install swiper --save     下载生产依赖  上线环境
   npm install 包名字 默认生产依赖
   npm install  jquery@2.7.0     指定版本下载
   删除包
   npm uninstall  包名

   查看镜像源
   $ npm config get  registry  http://registry.npmjs.org/
   $ npm config set registry  淘宝镜像的连接地址 https://registry.npm.taobao.org
  ```

### 模块化
规范：AMD  CMD  COMMONJS(node)

#### 模块3步走(功能代码的抽离)
1. 创建一个模块，并抛出  module.exports=模块
2. 引入模块 require('路径')
3. 使用模块

#### 模块的分类
1、内置模块  node中自己携带的模块，直接使用
2、第三方模块 先下载模块在使用
3、自定义模块 开发者自己写的模块

#### 文件操作模块（curd，增删改查）

1.文件夹的操作
  mkdir  rmdir readdir rename
2.文件的操作
  writeFile appendFile unlink  readFile
3.fs.sate 产看状态

#### path 
文件操作使用相对路径  文件找不到  相对路径是文件执行路径
path.join(__dirname,xxx)

#### 第三方模块发送邮箱
nodemailer 
var a=2
### 作业
1、打印某一文件夹下的目录结构
 目标文件 a.js  b.js  hehe 
 a.找到目标文件
 b.读取目标文件
 c.如果是文件 打印文件名
 d.如果是文件夹 还要再做一遍读取
 e.递归
2.实现发送邮件
3.爬虫相关资料
4.思考 注册 邮箱验证码手机验证