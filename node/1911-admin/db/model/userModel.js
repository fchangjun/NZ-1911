// 用户相关的数据模型

const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
   mail  : { type:String ,required:true},
   pass : { type:String ,required:true}
})

let userModel = mongoose.model('users',userSchema)

module.exports = userModel