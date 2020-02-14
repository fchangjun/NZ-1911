const express = require('express')
const router = express.Router()
const {findFoodByKw,
     findFoodByType,
     insertFood,
     findFood,
     delFood,
     updateFood,
     findFoodByPage} = require('../controls/foodControl')

/**
 * @api {post} /admin/food/add   管理平台添加菜品
 * @apiName add
 * @apiGroup Food
 *
 * @apiParam {String} name 菜品名字.
 * @apiParam {String} price 菜品价格.
 * @apiParam {String} desc Users unique ID.
 * @apiParam {String} img Users unique ID.
 * @apiParam {Number} foodType Users unique ID.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 */
router.post('/add',(req,res)=>{
  // 接受数据
  let {name,price,img,desc,foodType} = req.body 
  // 处理数据 插入数据库
  insertFood({name,price,img,desc,foodType})
  .then(()=>{res.send({err:0,msg:'插入成功'})})
  .catch((err)=>{
    res.send({err:-1,msg:'插入失败请重试'})})
  // 返回数据
})
/**
 * @api {post} /admin/food/infos  查询全部
 * @apiName infos
 * @apiGroup Food
 *
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
// 查询全部食品 
router.post('/infos',(req,res)=>{
  findFood()
  .then((infos)=>{res.send({list:infos,err:0,msg:'查询成功'})})
  .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})
// 2. 删除菜品
router.post('/del',(req,res)=>{
  // 获取要删除数据的id
  let {_id} = req.body
  delFood(_id)
  .then(()=>{res.send({err:0,msg:'删除成功'})})
  .catch((err)=>{res.send({err:-1,msg:'删除失败请重试'})})

})
// 3. 修改菜品
router.post('/update',(req,res)=>{
  // 获取修改数据的参数
  let {_id,name,price,img,desc,foodType} = req.body 
  console.log({_id,name,price,img,desc,foodType})
  updateFood(_id,{name,price,img,desc,foodType})
  .then(()=>{res.send({err:0,msg:'修改成功'})})
  .catch((err)=>{res.send({err:-1,msg:'修改失败请重试'})})
})

// 分页查询
router.post('/getInfos',(req,res)=>{
  let page = req.body.page||1 //查询的第几页数据
  let pageSize = req.body.pageSize ||2 //每页几条数据
  findFoodByPage(page,pageSize)
  .then((data)=>{
     console.log(data)
     let {result,allCount}=data 
    res.send({err:0,msg:'查询成功',list:result,allCount})
  })
  .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})

// 分类查询  
// 分类查询的数据也可能很多 需要和分页查询做关联
router.post('/getInfosByType',(req,res)=>{
  let {foodType} = req.body 
  findFoodByType(foodType)
  .then((data)=>{
   res.send({err:0,msg:'查询成功',list:data})
 })
 .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})

})
// 模糊查询 关键字查询
// 也要和分页做关联
router.post('/getInfosByKw',(req,res)=>{
  let {kw} = req.body ||''
  findFoodByKw(kw)
  .then((data)=>{
    res.send({err:0,msg:'查询成功',list:data})
  })
  .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})
module.exports = router