const Router = require("koa-router");
const router = new Router({prefix:'/banner'})
const {find} = require('../controllers/bannerCtr')
/**
 * @api {get} /banner  轮播图获取
 * @apiName GetBanner
 * @apiGroup Banner
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/user/4711
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get('/',find)

module.exports = router