// 食品相关的数据模型

const mongoose = require('mongoose')

let foodSchema = new mongoose.Schema({
   name  : { type:String ,required:true},
   price : { type:String ,required:true},
   desc  : { type:String ,required:true},
   img   : { type:String ,required:false},
   foodType   : { type:String ,required:true}, 
})

let foodModel = mongoose.model('foods',foodSchema)

module.exports = foodModel