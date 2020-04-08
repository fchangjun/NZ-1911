const Router = require("koa-router");
const authToken = require("../middlewera/autoToken")
const router = new Router({prefix:'/upload'})

const {uploadImg} = require('../controllers/uploadCtr')
router.post('/',authToken,uploadImg)
module.exports = router