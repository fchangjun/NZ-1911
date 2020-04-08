const mongoose = require("mongoose")

let bannerScheme = mongoose.Schema({
     __v :    {type:Number,select:false},
     name:{type:String,required:true},
     desc:{type:String,required:false},
     path:{type:String,required:true},
     link:{type:String,required:false},
     publish:{type:Number,default:0}

})

let bannerModel = mongoose.model("banners",bannerScheme)
module.exports = bannerModel


