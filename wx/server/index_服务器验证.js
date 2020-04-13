const express = require('express')
const crypto = require('crypto')
const app = express()
const token ='nz1911'
app.get('/nz1911',(req,res)=>{
  console.log(req.query)
  let{signature,echostr,timestamp,nonce} = req.query 
  // 字典排序后拼接成字符串
  let string =[token,timestamp,nonce].sort().join('')
  // 进行sha1 加密
  let result =crypto.createHash('sha1').update(string).digest('hex')
  if(result === signature){
    // 验证通过 
    res.send(echostr)
  }else{
    res.send('heheda')
  }
  
})
app.listen(80,()=>{
  console.log('server start')
})
/*
1）将token、timestamp、nonce三个参数进行字典序排序 
2）将三个参数字符串拼接成一个字符串进行sha1加密 
3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
*/