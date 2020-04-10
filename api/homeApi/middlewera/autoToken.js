const jsonWebToken = require("jsonwebtoken")
const {secret} = require("../config/config")
module.exports=async function(ctx,next){

  if(!ctx.headers.authorization){  return ctx.throw(402,"token缺失") } 
  let {uid} = ctx.request.body
  let token = ctx.headers.authorization.split("Bearer ")[1]
  try {
    let {userName,_id} = jsonWebToken.verify(token,secret)
    // if(uid !== _id){ ctx.throw(402,"token失效")  }
    ctx.state.userInfo = {userName,_id}
  } catch (error) {
  
    return ctx.throw(402,"token失效")
  }
  await next()

}