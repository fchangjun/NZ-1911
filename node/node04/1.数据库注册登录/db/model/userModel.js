const  mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  us:{type:String},
  ps:{type:String}
})

let UserModel = mongoose.model('users',UserSchema)

module.exports = UserModel