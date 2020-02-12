
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())

// 使用用户路由

let userRouter = require('./router/userRouter') //引入路由文件
let foodRouter = require('./router/foodRouter')
app.use('/user',userRouter)
app.use('/food',foodRouter)


// app.get('/user/login',(req,res)=>{
//   res.send('这里是登录')
// })

// app.get('/user/reg',(req,res)=>{
//   res.send('这里是注册')
// })

// 添加食品
// app.get('/food/add',(req,res)=>{
//   res.send('食品添加')
// })
// // 删除食品
// app.get('/food/del',(req,res)=>{
//   res.send('删除添加')
// })

http://localhost:3000/hehe/xixi/login
app.listen(3000,()=>{
  console.log('服务器启动')
})