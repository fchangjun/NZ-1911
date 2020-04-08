const admin = require("../db/model/adminModel")
const {secret} = require("../config/config")
const jsonWebToken = require("jsonwebtoken")
class AdminCtr{
  async find(ctx){
   let adminList = await admin.find()
   ctx.body={code:0,adminList,msg:'查询ok'}
  }
  findById(ctx){
    ctx.body ="获取某一个管理"
  }
  async create(ctx){
    let {userName,passWord} = ctx.request.body 
    let result = await admin.insertMany({userName,passWord})
    if(!result){ ctx.throw(-1,'管理员添加失败')}
    ctx.body ={code:0,msg:'管理员添加成功'}
  }
  async update(ctx){
    let id= ctx.params.id
    let {userName,passWord} = ctx.request.body 
    let result = await admin.findByIdAndUpdate(id,{userName,passWord} )
    if(!result){ ctx.throw(404,'管理员修改失败')}
    ctx.body={code:0,msg:'管理员修改成功'}
  }
  async delete(ctx){
    let id= ctx.params.id
    let result =await  admin.findByIdAndDelete(id)
    if(!result){ ctx.throw(404,'管理员删除失败')}
    ctx.body={code:0,msg:'管理员删除成功'}
  }
  async login(ctx){
    let {userName,passWord} = ctx.request.body 
    let userInfo =await  admin.findOne({userName,passWord})
    console.log(typeof userInfo)
    if(!userInfo){ ctx.throw(404,'登录失败')}
    let token = jsonWebToken.sign({userInfo},secret,{expiresIn:"1d"})
    ctx.body={code:0,msg:'登录成功',token}
  }
  
}
module.exports =new AdminCtr()
