const banner = require("../db/model/bannerModel")
class BannerCtr{
  // 获取已发轮播图信息
  async find(ctx){
   let list = await banner.find({publish:1})
   ctx.body={code:0,list,msg:'轮播图查询ok'}
  }  
}
module.exports =new BannerCtr()
