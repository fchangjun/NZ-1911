const JWT = require('jsonwebtoken')
// 对jwt相关的封装
const secret = 'shdfkjshfjkshfk131313'
let  createToken =(data,expiresIn)=>{
  let  obj ={} 
  obj.data=data||{}  //存入token的数据
  obj.ctime =(new Date()).getTime() //token的创建时间
  obj.expiresIn = expiresIn||1000*60*60*24*7 //设定的过期时间
  let token =JWT.sign(obj,secret)
  return token
}

let verifyToken=(token)=>{
  let result = null 
  try {
     let {data,ctime,expiresIn} = JWT.verify(token,secret)
     //判断token的过期时间  
     let nowTime =(new Date()).getTime()
     if(nowTime-ctime<expiresIn){
      //  没有过期
       result = data 
     }
     
  } catch (error) {  
  }
  console.log(result)
  return result
}



module.exports={createToken,verifyToken}