const Router = require("koa-router");
const authToken = require("../middlewera/autoToken")
const router = new Router({prefix:'/banner'})
const {find,
  create,
  update,
  publish,
  delete:del} = require('../controllers/bannerCtr')
router.get('/',authToken,find)
router.post('/',authToken,create)
router.del('/:id',authToken,del)
router.put('/:id',authToken,update)
router.put('/:id/publish',authToken,publish)
module.exports = router