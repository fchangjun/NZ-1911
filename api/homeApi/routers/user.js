const Router = require("koa-router");
const user = require('../db/model/userModel')
const {secret} = require("../config/config")
const jsonWebToken = require("jsonwebtoken")
const axios = require('axios')
// const authToken = require("../middlewera/autoToken")
// const authPermission = require("../middlewera/authPermissions.js")
const router = new Router({prefix:'/user'})
const {reg,login} = require('../controllers/userCtr.js')
router.post('/reg',reg)
router.post('/login',login)
router.post('/wxlogin',async (ctx)=>{
  // 从body获取用户发送的参数
  let {code} = ctx.request.body 
  console.log(code)
  // 请求微信的服务器 用code 换取opendid  用户在微信的主键id 
  let url ='https://api.weixin.qq.com/sns/jscode2session'
  // 携带的参数
  let params={
    appid:'wx5e6344cedcbf76a9',
    secret:'6259cadba107f92719c8c3f36d77cade',
    js_code:code,
    grant_type:'authorization_code'
  }
  let result = await axios.get(url,{params:{...params}})
  let {openid,session_key} = result.data
  //  将wx的openid 和 自己自己的用户系统进行关联 将opendid 和session_key 存入数据库 
  console.log(openid)
  let  isExist = await user.findOne({openid})
  if(isExist){
    // 微信id 已经存在
    let {address,phone,balance,_id,userName} = isExist
    let token = jsonWebToken.sign( {address,phone,balance,_id,userName},secret,{expiresIn:"1d"})
    ctx.body ={code:0,msg:'登录成功',token,uid:_id}
  }else{
    let  insertR = await user.insertMany({openid,session_key})
    let userInfo = await user.findOne({openid,session_key})
    let {address,phone,balance,_id,userName} = userInfo
    let token = jsonWebToken.sign( {address,phone,balance,_id,userName},secret,{expiresIn:"1d"})
    ctx.body ={code:0,msg:'登录成功',token,uid:_id}
  }
 
})
module.exports = router

