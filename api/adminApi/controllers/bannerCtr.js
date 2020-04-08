const banner = require("../db/model/bannerModel")
class BannerCtr{
  // 查询轮播图列表
  async find(ctx){
   let {page = 1,pageSize = 2 } = ctx.query
   console.log(ctx.query)
   let count = await banner.count()
   let list = await banner.find().skip((page-1)*pageSize).limit(Number(pageSize))
   ctx.body={code:0,list,msg:'查询ok',count}
  }
  // 添加轮播图
  async create(ctx){
    let {name,desc,path,link} = ctx.request.body 
    let result = await banner.insertMany({name,desc,path,link})
    if(!result){ ctx.throw(404,'轮播图添加失败')}
    ctx.body ={code:0,msg:'轮播图添加成功'}
  }
  async update(ctx){
    let id= ctx.params.id
    let {name,desc,path,link,publish=0} = ctx.request.body 
    let result = await banner.findByIdAndUpdate(id,{name,desc,path,link,publish} )
    if(!result){ ctx.throw(404,'轮播图修改失败')}
    ctx.body={code:0,msg:'轮播图修改成功'}
  }
  async delete(ctx){
    let id= ctx.params.id
    let result =await  banner.findByIdAndDelete(id)
    if(!result){ ctx.throw(404,'轮播图删除失败')}
    ctx.body={code:0,msg:'轮播图删除成功'}
  }
  async publish(ctx){
    let id= ctx.params.id
    let {publish} = ctx.request.body 
    let result = await banner.findByIdAndUpdate(id,{publish} )
    console.log(result)
    if(!result){ ctx.throw(404,'轮播图修改失败')}
    ctx.body={code:0,msg:'轮播图修改成功'}
  }
  
  
}
module.exports =new BannerCtr()
