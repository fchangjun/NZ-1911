# 创建一个koa项目
# 路由
# option预检请求
  allowedMethods
  405 501 
# restFulApi 规范
  curd 
  post put get del
# 控制器的功能
1. 接受参数
2. 处理逻辑
3. 发送HTTP响应 
## 参数类型
断点调试
* Query String   
```
ctx.query
```
* Router Pramas
```
ctx.params
```
* Body
```
npm install kao-bodyparser 
app.use(bodyParser())
ctx.request.body 
```
* Header 
```
ctx.header 
```
## 发送响应头 
```
ctx.body 
ctx.status
ctx.set('Allow',"GET,POST")
```


 
# 最佳实践
 * 所有的控制器分开存放
 * 使用类加方法的方式编写
 * 错误处理 参数校验
 * 合理的目录结构
```
|-router
|-|-admin.js
|-controllers 
|-| adminCtr.js
```

# 错误处理
404  412 500
```
ctx.throw(412,'错误内容')
```
* 自定义
* koa-json-error
# 参数校验
koa-parameter
```
npm install  koa-parameter
app.use(parameter(app))
ctx.verifyParams({
	name:{type:'string',required:true},
}}
```
# 云数据库 atlas

# jwt  
1. 用户登录创建token 并且写入 数据库然后返回
2. 用户调用接口携带token 
   a.验证token的合法性
   b.验证token 和用户是否关联 未实现
   c.除登录外其他的接口都需要token
# 授权 permissions
