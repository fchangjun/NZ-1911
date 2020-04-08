const user = require("../db/model/userModel")
const recharge = require("../db/model/rechargeModel")
// const {secret} = require("../config/config")
// const jsonWebToken = require("jsonwebtoken")
class RechargeCtr{

// 充值
 async create(ctx){
   console.log(222)
    ctx.verifyParams({
      uid:{type:"string",required:true},
      amount:{type:"number",required:true}
    })
    let {uid,amount} = ctx.request.body 
    //  创建充值记录
    console.log(uid,amount)
    let record = await recharge.insertMany({uid,amount})
    // 跟新余额
    let result = await user.findByIdAndUpdate(uid,{$inc:{balance:amount}})
    console.log(record)
    console.log(result)
  
  }
  
}
module.exports =new RechargeCtr()
