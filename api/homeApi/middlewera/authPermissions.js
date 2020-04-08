const permissionList =require('../config/permissions')
module.exports = async function(ctx,next){
  // 根据资源和方法验证权限
  let {path,method,state} = ctx  
  let {leavel,id,userName} = state.userInfo
  let list = permissionList[leavel]
  // 判断是否满足权限
  let boolean = false 
  list.map((item,index)=>{
    console.log(item.resources,path,item.permissions.indexOf(method.toLowerCase()))
    if(path.indexOf(item.resources)!==-1&&item.permissions.indexOf(method.toLowerCase())!==-1){
      boolean = true
    }
  })
  console.log(boolean)
  if(boolean){ return  await next()}
  ctx.body={code:403,msg:'权限不足,无法访问'}
  

}
