/*
1.前端先请求自己的服务器
2.我方服务器发起服务器请求 请求目标服务器
3.将网路请求的结果返回给前端
使用axios 发起服务器请求
*/ 
const cors = require('cors')
const axios =require('axios')
const express = require('express')
const path = require('path')
const app = express()
// 通过第三方中间件cors 来实现跨域问题
app.use(cors())

// app.get('/test',(req,res)=>{
//    res.send({err:0,msg:'访问0k'})
// })
app.get('/cors',(req,res)=>{
  console.log('请求到了')
  let url ='http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.2209329929181545'
  // 直接发起一个服务器请求
  axios.get(url)
  .then((data)=>{
    // console.log(data.data)
    res.send(data.data)
  })
})
app.listen(3000,()=>{
  console.log('服务器启动')
})