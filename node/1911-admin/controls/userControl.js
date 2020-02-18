const UserModel = require("../db/model/userModel")
const {createToken} = require('../utils/jwt')
let userReg = async (mail,pass)=>{
//  1. 邮箱是否重复
let isExst = await UserModel.findOne({mail})
let result
// 如果查询到数据 返回查到的数据 没有返回假 
if(isExst){
  throw '邮箱已注册'
}else{
  result = await UserModel.insertMany({mail,pass})
}
//  2. 插入数据库
return result
}

// 用户登录
let userLogin = async (mail,pass)=>{
  let result = await UserModel.findOne({mail,pass})

  if(result){
    //  登录成功 产生新的token
    let {_id,mail} = result
    let token =createToken({_id,mail}) 
    //将token更新数据库
    let updateResult  = await UserModel.updateOne({_id},{token})
    // 错误处理判断
    console.log(updateResult)
    return {_id,mail,token}
  }else{
    throw '用户名或密码不存在'
  }
}
//  判断token 和用户是否统一 
let tokenCheck = async (_id,token)=>{
   let result = await UserModel.findOne({_id,token})
   if(result){
     return result 
   }else{
     throw '用户token不匹配'
   }
}
// 退出登录
let logOut = async (_id)=>{
 let result = await UserModel.updateOne({_id},{token:''})
 if(result){
  return result 
}else{
  throw '退出失败请重试'
}
}
module.exports={
  userReg,
  userLogin,
  tokenCheck,
  logOut
}