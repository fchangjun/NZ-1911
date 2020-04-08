const order = require('../db/model/orderModel')

class Order {
 //添加订单
 async create(ctx){
  ctx.verifyParams({
    goodsList:{type:"array",required:true},
    uid:{type:"string",required:true},
    provice:{type:"string",required:true},
    city:{type:"string",required:true},
    country:{type:"string",required:true},
    detail:{type:"string",required:true},
    postCode:{type:"string",required:true},
    allPrice:{type:'number',required:true}
  })
 let {goodsList,uid,provice,city,country,detail,postCode,allPrice} = ctx.request.body
 let  insertR = await order.insertMany({goodsList,uid,provice,city,country,detail,postCode,allPrice})
 if(!insertR){ ctx.throw(401,'下单失败')}
 ctx.body={code:0,msg:"下单成功,请前往付款"}
 }
  //查询用户订单
 async findOneByUid(ctx){
    ctx.verifyParams({uid:{type:"string",required:true}})
    let {uid} = ctx.params
    let list = await order.find({uid})
    // console.log(list)
    if(!list){ ctx.throw(401,"查询失败")}
    ctx.body={code:0,msg:"查询ok",list}
  }
  //订单详情
  async findOne(ctx){
    ctx.verifyParams({_id:{type:"string",required:true}})
    let {_id} = ctx.params
    let list = await order.find({_id}).populate('goodsList.goodsId','price name path')
    // console.log(list)
    if(!list){ ctx.throw(401,"查询失败")}
    ctx.body={code:0,msg:"查询ok",detail:list[0]}
  }
}

module.exports = new Order()