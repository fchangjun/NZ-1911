const address = require("../db/model/addressModel")
const user = require("../db/model/userModel")
const {secret} = require("../config/config")
const jsonWebToken = require("jsonwebtoken")
class addressCtr{
  /*
  添加地址并且和用户做关联
  */ 
  async create(ctx){
     ctx.verifyParams({
       provice:{type:"string"},
       city:{type:"string"},
       country:{type:"string"},
       detail:{type:"string"},
       postCode:{type:"string"},
       uid:{type:"string",required:true}
     })
    let {provice,city,detail,postCode,uid,country} = ctx.request.body 
    console.log({provice,city,detail,postCode,uid})
    let insertResult = await address.insertMany({provice,city,detail,postCode,country,uid}) 
    // 更新用户表表
    let userInfo = await user.updateOne({_id:uid},{$push:{address:insertResult[0]._id}})
    ctx.body={code:0,msg:"地址添加成功"}
    console.log(insertResult,userInfo)
  }
  /*
  修改地址信息 根据地址id
  */ 
  async update(ctx){
    ctx.verifyParams({
      provice:{type:"string"},
      city:{type:"string"},
      country:{type:"string"},
      detail:{type:"string"},
      postCode:{type:"string"},
      _id:{type:"string",required:true}

    })
    let _id = ctx.params._id 
    let {provice,city,detail,postCode,country} = ctx.request.body 
    let uResult = await address.updateOne({_id},{provice,city,detail,postCode,country})
    console.log(uResult)
    if(!uResult||uResult.n!==1){ctx.throw('401','地址修改失败')}
    ctx.body={code:0,msg:"地址修改成功"}
  }
  /*
  根据用户id 获取 地址信息
  */ 
  async find(ctx){
    ctx.verifyParams({
      uid:{type:"string",required:true}
    })
    let uid = ctx.params.uid
    let fResult = await address.find({uid})
    if(!fResult){ ctx.throw(401,"地址查询失败")}
    ctx.body={code:0,msg:"地址查询成功",address:fResult}
  }
  async del(ctx){
    ctx.verifyParams({
      _id:{type:"string",required:true}
    })
    let _id = ctx.params._id
    let dResult = await address.deleteOne({_id})
    console.log(dResult)
    if(!dResult||dResult.n!==1){ ctx.throw(401,"地址删除失败")}
    ctx.body={code:0,msg:"地址删除成功"}
  }

  
}
module.exports =new addressCtr()
