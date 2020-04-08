const kind = require("../db/model/kindModel")
class KindCtr{
  /**
 * @api {get} /kind/ 商品类别查询
 * @apiName GetKind
 * @apiGroup kind
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 0,
 *       "list": [
 *           {
 *               "_id": "5e886bb92fb0e31ac1e43f9b",
 *               "kindName": "卸妆"
 *           },
 *           ...
 *         ],
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
   let list = await kind.find()
   ctx.body={code:0,list,msg:'查询ok'}
  }
}
module.exports =new KindCtr()
