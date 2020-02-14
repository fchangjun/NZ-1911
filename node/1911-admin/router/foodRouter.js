const express = require('express')
const router = express.Router()
const  FoodModel = require('../db/model/foodModel')
// 1. 添加菜品
router.post('/add',(req,res)=>{
  // 接受数据
  // 处理数据 插入数据库
  FoodModel.insertMany()
  // 返回数据
})

// 2. 删除菜品
// 3. 修改菜品
// 4. 查询菜品 
//    分页查询
//    模糊查询
//    分类查询
module.exports = router