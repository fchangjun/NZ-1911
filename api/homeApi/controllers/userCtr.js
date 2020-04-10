const user = require("../db/model/userModel")
const {secret} = require("../config/config")
const jsonWebToken = require("jsonwebtoken")
class UserCtr{

  async login(ctx){
    ctx.verifyParams({
      userName:{type:"string",required:true},
      passWord:{type:"string",required:true}
    })
    let {userName,passWord} = ctx.request.body 
    let userInfo =await  user.findOne({userName,passWord}).populate('address')
    console.log(userInfo)
    if(!userInfo){ ctx.throw(404,'用户名或密码错误')}
    let {address,phone,balance,_id} = userInfo
    let token = jsonWebToken.sign( {address,phone,balance,_id,userName},secret,{expiresIn:"1d"})
    ctx.body={code:0,msg:'登录成功',token,uid:_id,userName}
  }

  async reg(ctx){
    ctx.verifyParams({
      userName:{type:"string",required:true},
      passWord:{type:"string",required:true}
    })
    let {userName,passWord} = ctx.request.body 
    let isExist = await user.findOne({userName})
    if(isExist){ return ctx.body = {err:-1,msg:"用户名已存在"}}
    let result = await user.insertMany({userName,passWord})
    ctx.body = {err:0,msg:"注册成功"}
  }
  
}
module.exports =new UserCtr()
