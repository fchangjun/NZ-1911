const Router = require("koa-router");
const authToken = require("../middlewera/autoToken")
const router = new Router({prefix:'/kind'})
const {find} = require('../controllers/kindsCtr')
router.get('/',find)

module.exports = router