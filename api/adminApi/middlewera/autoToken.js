const jsonWebToken = require("jsonwebtoken")
const {secret} = require("../config/config")
module.exports=async function(ctx,next){
  let {authorization} = ctx.headers
  if(!authorization){ctx.throw(403,"token 缺失")}
  // console.log(ctx.headers.authorization)
  let token = authorization.split("Bearer ")[1]
  // console.log(token)
  try {
    let {userInfo} = jsonWebToken.verify(token,secret)
    ctx.state.userInfo = userInfo
  } catch (error) {
    // console.log(error)
    return ctx.throw(402,"token失效")
  }
  await next()

}