/*
1.先写接口
2.接口内 接受用户传递的数据
3. 处理数据
   对于注册 处理数据就是将us 和 ps 插入到数据库里
   a.连接数据库
   b.创建schema对象和数据模型 
   c.调用数据模型里的方法
4.返回处理结束
*/

const express = require('express')
const router = express.Router()
const UserModel = require('../db/model/userModel')
// 注册
router.get('/reg',(req,res)=>{
  // 接受数据
  let {us,ps}=req.query 
  console.log(us,ps)
  console.log(UserModel)
  // 通过数据模型下的方法来做插入
  UserModel.insertMany({us:us,ps:ps})
  .then((data)=>{
    res.send({err:0,msg:'注册ok'})
  })
  .catch((err)=>{
    res.send({err:-1,msg:'注册nook'})
  })
})

//登录
router.get('/login',(req,res)=>{
  // 获取数据 
   let {us,ps} = req.query
  // 处理数据
  UserModel.find({us,ps})
  .then((data)=>{
    console.log('then',data)
    if(data.length==1){
      res.send({err:0,msg:'登录ok'})
    }else{
      res.send({err:-1,msg:'用户名或密码错误'})
    }
  })
  .catch((err)=>{
    res.send({err:-2,msg:'内部错误请重试'})
    console.log("err",err)
  })
  // 根据处理结果返回数据
})

module.exports = router