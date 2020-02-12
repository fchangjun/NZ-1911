
// 可以在中间件里做一些判断 成功 next执行下一个  失败不执行next
const express = require('express')
const app = express()
// 创建一个自定义中间件
function middleware1(req,res,next){
  // req就是request对象 也可以接受数据
  // res及时response对象 给前端返回数据
  console.log('这里是中间件1')

  next()//执行下一个中间件
}
function middleware2(req,res,next){
  console.log('这里是中间件2')
  next()//执行下一个中间件
}
app.get('/test',middleware1,middleware2,(req,res)=>{
  console.log(111)
})

app.listen(3000,()=>{
  console.log('服务器启动')
})