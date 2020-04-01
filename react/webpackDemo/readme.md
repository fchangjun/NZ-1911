## webpack  
按照文件的引用关系 对文件进行合并打包
## webpack的使用
vue/cli   vue 脚手架工具  基于webpack
create-react-app  react 脚手架工具 基于webpack 
自己用webpack 搭建脚手架工具

## 目标
1. 了解webpack核心 与基本使用
2. 自己搭建一套 react 或者vue 脚手架

## 基本使用 

### 下载安装
```
npm install webpack -g  全局安装不推荐
npm install  webpack --save-dev 项目安装  
```
在 package.json 写运行指令
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"webpack"
  },
npm run  dev(指令)
```
### mode 配置
production  线上模式  会进行代码压缩
development 开发模式不会做代码压缩  
* 默认路径
```
webpack  --mode = production/development 
```
当我们运行webpack指令的时候 
默认的入口文件是 ./src/index.js 
默认的出口文件  ./dist/main.js
* 指定路径

```
"dev_dir":"webpack --mode=production ./demo2/src/hehe.js -o ./demo2/output/main.js" 
webpack 模式   入口路径  -o  出口路径
```

### 配置文件 webpack.config.js 
webpack 的配置文件 
默认 该文件要求和pack.json  运行webpack 指令的时候默认会在运行路径找该文件

### 单入口单出口

### 多入口多出口

### 加载器 
在js文件里引入图片 
在js文件里引入 css
正常情况下  import 只能引入js模块 但是很多时候需要用import导入其他文件比如 css ，png 
在这种情况下无法解析 需要 loader加载器 将特殊的文件转化为js模块
module:{
  rules:[
    {
      test:'正则匹配加载的模块',
      use:[加载器1,加载器2 ...]
    }
  ]
}
### 插件 
帮助我们简化一些功能性操作
plugins:[插件1，插件2]
###  通过webpack 进行react项目的开发
1. 开发者模式  npm  run dev 
   a.要在本地启动一个服务器
   b.运行我们的react项目  v
   c.使用jsx 语法  v 
   d.引入预处理语言 v
   e.引入图片   x
   d.html 文件的移动 v
2. 生产者模式   npm run build 
   a.编译打包 产生dist文件
   b.能够进行代码压缩
   c.使用jsx 语法
   d.引入预处理语言
   e.引入图片
   d.html 文件的移动