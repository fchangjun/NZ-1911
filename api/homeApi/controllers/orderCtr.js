const order = require('../db/model/orderModel')

class Order {
 //添加订单
 async create(ctx){
  ctx.verifyParams({
    goodsList:{type:"array",required:true},
    uid:{type:"string",required:true},
    address:{type:"string",required:true},
    phone:{type:"string",required:true}
  })
 let {goodsList,uid,address,phone} = ctx.request.body
 let allPrice = 0
 let allCount =0 
 goodsList.map((item)=>{
    allCount+=Number(item.count)
    allPrice += Number(item.count)*Number(item.price)
  return item
 })
 let image = goodsList[0].image
 let desc =goodsList[0].name+'等'
 let  insertR = await order.insertMany({uid,allPrice,allCount,phone,address,desc,goodsList,image})
 if(!insertR){ ctx.throw(401,'下单失败')}
 ctx.body={code:0,msg:"下单成功,请前往付款"}
 }
  //查询用户订单
 async findOneByUid(ctx){
    ctx.verifyParams({uid:{type:"string",required:true}})
    let {uid} = ctx.params
    let {state} = ctx.request.query
    let select = {uid}
    if(state != -2){ select.state =state}
    console.log(state)
    let list = await order.find(select)
    // console.log(list)
    if(!list){ ctx.throw(401,"查询失败")}
    ctx.body={code:0,msg:"查询ok",list}
  }
  //订单详情
  async findOne(ctx){
    ctx.verifyParams({_id:{type:"string",required:true}})
    let {_id} = ctx.params
    let list = await order.find({_id}).select('+goodsList')
    // console.log(list)
    if(!list){ ctx.throw(401,"查询失败")}
    ctx.body={code:0,msg:"查询ok",detail:list[0]}
  }
}

module.exports = new Order()