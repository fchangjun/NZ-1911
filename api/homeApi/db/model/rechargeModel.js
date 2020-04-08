
const mongoose = require("mongoose")

let userScheme = mongoose.Schema({
     __v :    {type:Number,select:false},
    uid:{type:mongoose.Schema.Types.ObjectId,ref:'users'},
    amount:{type:Number,default:0},
    createdAt:{type:Number,},
    updatedAt: {type:Number},
},
{
timestamps: { currentTime: () => Date.now()  }
})

let userModel =mongoose.model("recharge",userScheme)
module.exports = userModel


