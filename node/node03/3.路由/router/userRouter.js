const express = require('express')
const router = express.Router() //创建路由对象

router.get('/login',(req,res)=>{
  res.send('这里是登录')
})

router.get('/reg',(req,res)=>{
  res.send('这里是注册')
})
// 抛出路由模块
module.exports = router