//api 服务器用来写api接口
const path = require('path')
const express = require('express')
const {sendAll} = require('./ws')
// 引入websocket服务器
const app = express()

app.use('/public',express.static(path.join(__dirname,'./www')))

app.get('/reward',(req,res)=>{
  let {reward} = req.query
  sendAll(reward)
  res.send({err:0,msg:'发送ok'})
})

app.listen(3000,()=>{
  console.log("server start")
})