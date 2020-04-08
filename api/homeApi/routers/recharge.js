const Router = require("koa-router");
// const authToken = require("../middlewera/autoToken")
// const authPermission = require("../middlewera/authPermissions.js")
const router = new Router({prefix:'/recharge'})

const {create} = require('../controllers/rechargeCtr.js')
console.log(111)
router.post('/',create)
module.exports = router

// const Router = require("koa-router");
// const router = new Router({prefix:'/recharge'})
// router.post('/',()=>{
//   console.log(333)
// })
// module.exports = router

