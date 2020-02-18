const {verifyToken} = require('../utils/jwt')
let tokenMiddlWare = (req,res,next)=>{
  console.log('token拦截器',req.body)
  let {token} = req.body 
  if(!token){return res.send({err:-997,msg:'token丢失'})} 
  //获取验证token的状态
  let tokenState = verifyToken(token)
  console.log(tokenState) 
  if(tokenState){
    next()
  }else{
    res.send({err:-998,msg:'token失效'})
  }
}
module.exports =tokenMiddlWare