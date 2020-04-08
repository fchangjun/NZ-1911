const Router = require("koa-router");
// const authToken = require("../middlewera/autoToken")
// const authPermission = require("../middlewera/authPermissions.js")
const router = new Router({prefix:'/order'})
const {create,findOneByUid,findOne} = require('../controllers/orderCtr.js')
router.post('/',create)
router.get('/:uid/user',findOneByUid)
router.get('/:_id',findOne)
module.exports = router

