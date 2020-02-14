const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

//post 数据的解析 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//静态资源路径
app.use('/public',express.static(path.join(__dirname,'./public')))

/*
  路由
  1.文件上传的路由
*/
let  uploadRouter = require('./router/uploadRouter')
let  foodRouter = require('./router/foodRouter')
app.use('/admin/food',foodRouter)
app.use('/admin/upload',uploadRouter)
app.listen(3000,()=>{
  console.log(`/**
  *　　　　　　　 ┏┓　 ┏┓+ +
  *　　　　　　　┏┛┻━━━┛┻┓ + +
  *　　　　　　　┃　　　　　　┃ 　
  *　　　　　　　┃　　　━　　 ┃ ++ + + +
  *　　　　　　 ████━████  ┃+
  *　　　　　　　┃　　　　　　　┃ +
  *　　　　　　　┃　　　┻　　　┃
  *　　　　　　　┃　　　　　　┃ + +
  *　　　　　　　┗━┓　　　┏━┛
  *　　　　　　　　 ┃　　　┃　　　　　　　　　　　
  *　　　　　　　　 ┃　　　┃ + + + +
  *　　　　　　　　 ┃　　　┃　　　　Code is far away from bug with the animal protecting　　　　　　　
  *　　　　　　　　 ┃　　　┃ + 　　　　神兽保佑,代码无bug　　
  *　　　　　　　　 ┃　　　┃
  *　　　　　　　　 ┃　　　┃　　+　　　　　　　　　
  *　　　　　　　　 ┃　 　 ┗━━━┓ + +
  *　　　　　　　　 ┃ 　　　　   ┣┓
  *　　　　　　　　 ┃ 　　　　　 ┏┛
  *　　　　　　　　 ┗┓┓┏━┳┓┏┛ + + + +
  *　　　　　　　　  ┃┫┫ ┃┫┫
  *　　　　　　　　  ┗┻┛ ┗┻┛+ + + +
  */`)
})