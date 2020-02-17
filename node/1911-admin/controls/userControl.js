const UserModel = require("../db/model/userModel")
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
    return result
  }else{
    throw '用户名或密码不存在'
  }
}
module.exports={
  userReg,
  userLogin
}