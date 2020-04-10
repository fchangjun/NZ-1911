const {model,Schema} =  require("mongoose")

const odrersSchema = Schema({
   __v:{type:Number,select:false},
   goodsList:{
     type:[{
     _id:{type:Schema.Types.ObjectId,select:false},
     goodsId:{type:Schema.Types.ObjectId,ref:'goods',required:true},
     count:{type:Number,default:0},
     price:{type:Number,default:0},
     name:{type:String,default:''},
     image:{type:String,default:''},
   }],required:true,select:false},
  uid:{type:Schema.Types.ObjectId,ref:'users',required:true},
  allPrice:{type:Number,default:0},
  image:{type:String,default:''},
  allCount:{type:Number,default:0},
  phone:{type:String,default:''},
  address:{type:String,default:''},
  userName:{type:String,default:''},
  desc:{type:String,default:''},
  state:{type:Number,enum:[-1,0,1,2],default:-1}, //未付款 待发货  待收获 已完成 
  createTime:{type:Date,default: new Date().getTime()}

})
let orderModel = model("orders",odrersSchema)
module.exports = orderModel