const express = require('express')
const app = express()
const crypto = require('crypto')
const {getTicket} = require('./api/index')
const {getToken} = require('./utils/token/index')
const randomstring = require("randomstring");
const  {APPID} = require('./config/index')
const path  = require('path')
// 指定静态资源路径
app.use(express.static(path.join(__dirname,'./img')))
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
   let  appId =APPID
  // timestamp 是以s为单位的时间戳
  let timestamp =parseInt((new Date()).getTime()/1000) 
  // nonceStr 16位随机字符串
  let nonceStr = randomstring.generate(16);
  let url ='http://qstest.natapp1.cc/iwantsay'
  // signature 需要由 timestamp nonceStr 以及h5页面的url 和 ticket 进行加密处理
  let token =await getToken()
  let data = await getTicket(token)
  let ticket=data.data.ticket
  console.log('ticket',ticket)

  let string =`jsapi_ticket=${ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`
  console.log(string)
  let signature =crypto.createHash('sha1').update(string).digest('hex')
  console.log(signature)
  // 业务处理
  let num = Math.ceil(Math.random()*44)
  let img =`http://qstest.natapp1.cc/${num}.png`
  res.render('hehe',{signature,nonceStr,timestamp,appId,img})
})
app.listen(80,()=>{
  console.log('server start')
})
