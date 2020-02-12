const express = require('express')
const router = express.Router()

router.get('/add',(req,res)=>{
  res.send('食品添加')
})
// 删除食品
router.get('/del',(req,res)=>{
  res.send('删除添加')
})


module.exports = router


