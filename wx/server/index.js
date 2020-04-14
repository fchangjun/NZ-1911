const express = require('express')
const app = express()
const {getTicket} = require('./api/index')
const {getToken} = require('./utils/token/index')
const randomstring = require("randomstring");
const  {APPID} = require('./config/index')
const path  = require('path')
//指定模板目录
app.set(path.join(__dirname,'./views'),'views')
//使用ejs 模板引擎
app.set('view engine','ejs')  
// 列子
app.get('/test',(req,res)=>{
 //渲染一个模板 
 res.render('hehe',{name:'韩梅梅',age:16})
})

app.get('/iwantsay',async (req,res)=>{
  let obj={
    appId:APPID,
    timestamp:0,
    nonceStr:0,
    signature:0
  }
  // timestamp 是以s为单位的时间戳
  obj.timestamp =parseInt((new Date()).getTime()/1000) 
  // nonceStr 16位随机字符串
  obj.nonceStr = randomstring.generate(16);
  let url ='http://qstest.natapp1.cc/iwantsay'
  // signature 需要由 timestamp nonceStr 以及h5页面的url 和 ticket 进行加密处理
  let token =await getToken()
  let {ticket} = await getTicket(token)
  console.log('ticket',ticket)
  res.render('hehe',obj)
})
app.listen(80,()=>{
  console.log('server start')
})
