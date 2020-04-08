const goods = require("../db/model/goodsModel")
class GoodsCtr{
  /**
 * @api {get} /goods/   商品查询(全部)
 * @apiName GetGoods
 * @apiGroup goods
 *
 * @apiParam {Number} page            分页页码数，非必须
 * @apiParam {Number} pageSize        每页数量，非必须
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 0,
 *       "msg":"查询ok"
 *       }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */  
  async find(ctx){
   let {page = 1 ,pageSize = 2} = ctx.query
   let count = await goods.count()
   let list = await goods.find().limit(Number(pageSize)).skip((page-1)*pageSize).populate('kind',"kindName -_id")
   ctx.body={code:0,list,msg:'查询ok',count}
  }
  /**
 * @api {get} /goods/:id 商品查询(id)
 * @apiName GetGoodsById
 * @apiGroup goods
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 0,
 *       "msg":"查询ok"
 *       }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */ 
  async findOneById(ctx){
    ctx.verifyParams({
       id:{type:"string",required:true}
    })
    let id= ctx.params.id
    let result = await goods.find({_id:id})
    if(!result){ ctx.throw(404,'商品获取失败')}
    ctx.body={code:0,msg:'商品获取成功',result}
  }

/**
 * @api {get} /goods/:kind/kind 商品查询(类别)
 * @apiName GetGoodsByType
 * @apiGroup goods
 *
 * @apiParam {Number} page            分页页码数，非必须
 * @apiParam {Number} pageSize        每页数量，非必须
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 0,
 *       "msg":"查询ok"
 *       }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */  
  async findByKind(ctx){
    ctx.verifyParams({
      kind:{type:"string",required:true}
   })
    let {kind} = ctx.params
    let {page = 1 ,pageSize = 2} = ctx.query
    let count = await goods.count({kind})
    let list = await goods.find({kind}).limit(Number(pageSize)).skip((page-1)*pageSize).populate('kind',"kindName -_id")
    ctx.body={code:0,list,msg:'查询ok',count}
   }
 
  
  
}
module.exports =new GoodsCtr()
