const KoaRouter = require("koa-router")
const authToken = require("../middlewera/autoToken")
const authPermission = require("../middlewera/authPermissions.js")
const router = new KoaRouter({prefix:"/goods"})
const {find,findOneById,findByKind} = require('../controllers/goodsCtr.js')
router.get('/',find)
router.get('/:id',findOneById)
router.get('/:kind/kind',findByKind)
module.exports = router