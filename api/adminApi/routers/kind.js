const Router = require("koa-router");
const authToken = require("../middlewera/autoToken")
const router = new Router({prefix:'/kind'})
const {find,
  create,
  update,
  delete:del} = require('../controllers/kindsCtr')
router.get('/',authToken,find)
router.post('/',authToken,create)
router.del('/:id',authToken,del)
router.put('/:id',authToken,update)

module.exports = router