const Router = require("koa-router");
// const authToken = require("../middlewera/autoToken")
// const authPermission = require("../middlewera/authPermissions.js")
const router = new Router({prefix:'/user'})
const {reg,login} = require('../controllers/userCtr.js')
router.post('/reg',reg)
router.post('/login',login)
module.exports = router

