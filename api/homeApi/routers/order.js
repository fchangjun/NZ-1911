const Router = require("koa-router");
const authToken = require("../middlewera/autoToken")
// const authPermission = require("../middlewera/authPermissions.js")
const router = new Router({prefix:'/order'})
const {create,findOneByUid,findOne} = require('../controllers/orderCtr.js')
router.post('/',authToken,create)
router.get('/:uid/user',authToken,findOneByUid)
router.get('/:_id',authToken,findOne)
module.exports = router

