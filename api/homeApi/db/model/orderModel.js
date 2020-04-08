const {model,Schema} =  require("mongoose")

const odrersSchema = Schema({
   __v:{type:Number,select:false},
   goodsList:{
     type:[{
     _id:{type:Schema.Types.ObjectId,select:false},
     goodsId:{type:Schema.Types.ObjectId,ref:'goods',required:true},
     count:{type:Number,default:0}
   }],required:true},
  uid:{type:Schema.Types.ObjectId,ref:'users',required:true},
  provice:{type:String,default:''},
  city:{type:String,default:''},
  country:{type:String,default:''},
  detail:{type:String,default:''},
  postCode:{type:String,default:''},
  allPrice:{type:Number,default:0},
  state:{type:Number,enum:[-1,0,1,2],default:-1}

})
let orderModel = model("orders",odrersSchema)
module.exports = orderModel