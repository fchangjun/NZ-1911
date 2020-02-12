/*
传统的手机邮箱注册
1.邮箱  2. 密码
352186439@qq.com
sjflskjs@qq.com
如何判断一个邮箱或者手机号的有效性 
如果是有效的那么一定可以收到相关的信息

前端写的安全验证都是假的 都可以被越过
涉及到安全验证问题一定要有后端参与

邮箱注册
1.发送验证码的接口
  a.用户调用接口传递邮箱
  b.后端获取邮箱后发送随机验证码
  c.将邮箱和验证码做保存操作
2.用户注册的接口
  a.接受用户的信息  邮箱  验证码 密码
  b.用户发送的验证码 和 后端存储的是不是一致
  c.如果一致那就注册
*/ 
const express = require('express')
const Mail = require('./mail')
// console.log(mail)
const app = express()
let mails={} //保存邮箱和验证码
// 发送验证码接口
app.get('/getCode',(req,res)=>{
  // 接受用户的邮箱
  let {mail} = req.query //1398654849@qq.com
  //产生随机码 验证码
  let code = parseInt(Math.random()*10000)
  console.log(code)
  //调用自己封装的mail模块发送邮箱 
  Mail.send(mail,code)
  .then(()=>{
    // 验证码发送ok 就将邮箱和验证码做保存
    mails[mail]=code  

    console.log('保存的邮箱',mails)
    res.send({err:0,msg:'验证码发送ok'})
  })
  .catch((err)=>{
    res.send({err:-1,msg:'验证码发送失败'})
  })
})

// 用户注册 
app.get('/reg',(req,res)=>{
  let {mail,code,pass} = req.query 
  //那用户填写的验证码和保存的验证码做对比
  if(mails[mail]==code){
    //注册操作
    res.send({err:0,msg:'注册ok'})
  }else{
    res.send({err:-1,msg:'验证码错误'})
  }
})
app.listen(3000,()=>{
  console.log('服务器启动')
})