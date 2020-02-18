let tokenMiddlWare = (req,res,next)=>{
  console.log('token拦截器')
  let tokenState = false 
  if(tokenState){
    next()
  }else{
    res.send({err:-998,msg:'token失效'})
  }
}
module.exports =tokenMiddlWare