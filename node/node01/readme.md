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
规范：AMD  CMD  COMMINGJS(node)

#### 模块3步走
1. 创建一个模块，并抛出  module.exports=模块
2. 引入模块 require('路径')
3. 使用模块