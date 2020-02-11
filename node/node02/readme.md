爬虫 
竞价排名 搜索引擎
<meta keyword lol 王者荣耀 tfboy>
http://www.hehe.com     lol 王者荣耀 tfboy
http://www.hehe1.com
网站权重

1、获取相关的网页
2、根据网页分析内容信息

#### 爬虫的步骤
1.通过http 或者 https 模块 获取网络资源（网页 记事本 图片 音频 视频）
```
http.get(url,(res)=>{
  let rawData=''
  res.on('data',(chunk)=>{
    <!-- 传递完一段数据就会触发 chunk 传递的每一段数据 -->
    rawData+=chunk
  })

  res.on('end',()=>{
    <!-- 数据传输完毕 -->
  })
})
.on('error',()=>{
})
```
2.分析内容 （正则表达式）
cheerio 获取网页的具体内容信息
#### 同步异步问题
1.多个异步操作按照固定的顺序执行 -> 回调嵌套->回调地狱->promise的链式调用->async  await(伪同步)

#### 框架 express koa egg
node 引入第三方模块 首先在当前文件夹寻找 node_modules 如果没有依次向上寻找

#### api接口的构成
接口四要素： 接口地址url  请求方法  传递的字段（数据格式）  返回信息 
前端： 
1.传递数据 传给后端
2.处理后端返回结果
后端：
1.接受前端传递的数据
2.处理数据
3.将处理结果返回给前端
##### 获取数据的方式
 1. get数据 req.query
 2. post 数据 req.body 需要使用第三方插件 body-parser
##### post 数据格式的多样性
  1.x-www-form-urlencode
  2.json
  3.form-data 格式

#### 前端接口测试工具  postman postwoman ....
#### 作业
1. 爬取一个网站 并且将图片下载到本地
2. 爬取一个网站 并且将音乐、视频下载到本地
3. request 第三方模块
4. 用node 写一个注册登录的接口 和发送邮件功能关联
5. mongodb https://www.mongodb.com/download-center/enterprise