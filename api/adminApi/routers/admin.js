const Router = require("koa-router");
const authToken = require("../middlewera/autoToken")
const authPermission = require("../middlewera/authPermissions.js")
const router = new Router({prefix:'/admin'})
const {find,
  login,
  create,
  update,
  delete:del} = require('../controllers/adminCtr')
router.get('/',authToken,authPermission,find)
router.post('/',create)
// router.post('/',authToken,authPermission,create)
router.del('/:id',authToken,authPermission,del)
router.put('/:id',authToken,authPermission,update)
router.post('/login',login)
module.exports = router