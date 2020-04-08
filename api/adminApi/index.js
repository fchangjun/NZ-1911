const path = require("path")
const koaStatic = require("koa-static")
const  Koa = require("koa")
const koaBody = require('koa-body')
const regRouter = require("./routers")
const error = require('./utils/error')
const db = require('./db/connect')
const app = new Koa()
// 错误捕获
app.use(error)
app.use(koaStatic(path.join(__dirname,'../public')))
app.use(koaBody({
  multipart:true,
  formidable:{
    keepExtensions:true,
    uploadDir:path.join(__dirname,'../public/upload')
  }
}))

// 路由注册
regRouter(app)

// 设置options 预检
// app.use(router.allowedMethods())
app.listen(3000,()=>{
  console.log('server start')
})