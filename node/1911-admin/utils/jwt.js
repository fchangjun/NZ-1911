const JWT = require('jsonwebtoken')
// 对jwt相关的封装
const secret = 'shdfkjshfjkshfk131313'
let  createToken =()=>{
  let token =JWT.sign({us:123},secret)
  return token
}



module.exports={createToken}