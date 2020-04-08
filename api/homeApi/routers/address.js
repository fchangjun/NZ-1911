
const Router = require("koa-router");
const router = new Router({prefix:'/address'})
const {create,find,update,del} = require('../controllers/addressCtr')

router.get("/:uid",find)
router.put('/:_id',update)
router.post("/",create)
router.del("/:_id",del)
module.exports = router