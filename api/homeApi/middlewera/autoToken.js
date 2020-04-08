const jsonWebToken = require("jsonwebtoken")
const {secret} = require("../config/config")
module.exports=async function(ctx,next){
  console.log(ctx.headers.authorization)
  let token = ctx.headers.authorization.split("Bearer ")[1]
  console.log(token)
  try {
    let {userInfo} = jsonWebToken.verify(token,secret)
    ctx.state.userInfo = userInfo
  } catch (error) {
    console.log(error)
    return ctx.throw(402,"token失效")
  }
  await next()

}