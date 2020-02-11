const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// 解析post数据
// 解析表单格式的数据 x-www-form-urlencode 
app.use(bodyParser.urlencoded({ extended: false }))
// 解析json数据格式
app.use(bodyParser.json())


// 实例化一个express对象

// app.get('/login',(req,res)=>{
//   res.send("呵呵哒")
// })

// 登录 
// app.get('/',()=>{})==app.get(()=>{})
app.get('/',(req,res)=>{
/*
  1.接受前端数据 req request的简写包含前端传递的数据
  2.处理数据
  3.返回结果 res response的缩写 给前端返回结果
  4.返回数据格式 json 至少包含2-3个字段  错误码 错误信息 数据
*/
  // let query = req.query //获取前端的get传参 
  // console.log(query)
  let {userName,passWord} = req.query //规定前端传递的数据字段
  if(userName ==='韩梅梅'&& passWord ==='123'){
    res.send({err:0,msg:'登录ok'})
  }else{
    res.send({err:-1,msg:'登录失败'})
  }
})
// post 注册
app.post('/reg',(req,res)=>{
  // 接受post数据
  // express 默认是不能解析post数据的
  // 通过一个第三方模块协助解析 body-parser
  console.log(req.body)
  let {userName,passWord} = req.body 
  console.log({userName,passWord})
  res.send({err:0,msg:'注册ok'})
})


// 监听3000端口号启动一个node服务器
// 本地服务器 域名 http://localhost:3000/login
app.listen(3000,()=>{
  console.log('服务器启动')
})