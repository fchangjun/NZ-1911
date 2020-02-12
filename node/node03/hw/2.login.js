/*
传统的手机邮箱注册
1.邮箱  2. 密码
352186439@qq.com
sjflskjs@qq.com
如何判断一个邮箱或者手机号的有效性 
如果是有效的那么一定可以收到相关的信息

前端写的安全验证都是假的 都可以被越过
涉及到安全验证问题一定要有后端参与


*/ 
const express = require('express')
const app = express()
let users=[] //保存用户名和密码
app.get('/reg',(req,res)=>{
  let {mail,pass} = req.query
  // 暂时将邮箱和密码存入缓存
  users.push({mail,pass})
  console.log(users)
  res.send({err:0,msg:'注册ok'})
})

app.get('/login',(req,res)=>{
  let {mail,pass} = req.query
  // 遍历保存的用户信息
  let state=0 //默认不匹配
  // 那用户登录的信息 和保存 的注册信息进行对比
  for (let index = 0; index < users.length; index++) {
    // 用户名密码ok更改状态

   if(users[index].mail===mail&&users[index].pass===pass){
     state=1
   }
  }
  // state为0 说明匹配不对  为1 说明匹配ok
  if(state){
    res.send({err:0,msg:'登录ok'})
  }else{
    res.send({err:-1,msg:'登录nook'})
  }
})
app.listen(3000,()=>{
  console.log('服务器启动')
})