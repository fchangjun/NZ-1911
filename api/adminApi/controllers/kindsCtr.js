const kind = require("../db/model/kindModel")
class KindCtr{
  // 查询商品类别列表
  async find(ctx){
   let list = await kind.find()
   ctx.body={code:0,list,msg:'查询ok'}
  }
  // 添加商品类别
  async create(ctx){
    let {kindName} = ctx.request.body 
    let result = await kind.insertMany({kindName})
    if(!result){ ctx.throw(404,'商品类别添加失败')}
    ctx.body ={code:0,msg:'商品类别添加成功'}
  }
  async update(ctx){
    let id= ctx.params.id
    let {kindName} = ctx.request.body 
    let result = await kind.findByIdAndUpdate(id,{kindName} )
    if(!result){ ctx.throw(404,'商品类别修改失败')}
    ctx.body={code:0,msg:'商品类别修改成功'}
  }
  async delete(ctx){
    let id= ctx.params.id
    let result =await  kind.findByIdAndDelete(id)
    if(!result){ ctx.throw(404,'商品类别删除失败')}
    ctx.body={code:0,msg:'商品类别删除成功'}
  }

}
module.exports =new KindCtr()
