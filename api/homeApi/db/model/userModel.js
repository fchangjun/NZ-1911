const{model,Schema} = require("mongoose")

let userScheme =Schema({
     __v :    {type:Number,select:false},
     userName:{type:String},
     passWord:{type:String},
     token:{type:String,default:null},
     // address:{type:[{ addressId:Schema.Types.ObjectId,ref:'kinds'}],select:true},
     address:{type:[{type:Schema.Types.ObjectId,ref:'addresses'}],select:true},
     phone:{type:String,default:''},
     balance:{type:Number,default:0},
     openid:{type:String,default:''},
     session_key:{type:String,default:''}
})

let userModel = model("users",userScheme)
module.exports = userModel


