const KoaRouter = require("koa-router")
const authToken = require("../middlewera/autoToken")
const authPermission = require("../middlewera/authPermissions.js")
const router = new KoaRouter({prefix:"/goods"})
const {find,
  findOneById,
  create,
  update,
  putaway,
  delete:del} = require('../controllers/goodsCtr.js')
router.get('/',authToken,authPermission,find)
router.get('/:id',authToken,authPermission,findOneById)
router.post('/',authToken,authPermission,create)
router.del('/:id',authToken,authPermission,del)
router.put('/:id',authToken,authPermission,update)
router.put('/:id/putaway',authToken,authPermission,putaway)
module.exports = router