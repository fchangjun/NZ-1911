const{model,Schema} = require("mongoose")

let addressScheme =Schema({
     __v :    {type:Number,select:false},
     provice:{type:String,default:''},
     city:{type:String,default:''},
     country:{type:String,default:''},
     detail:{type:String,default:''},
     postCode:{type:String,default:''},
     uid:{type:String,required:true,select:false}

})

let addressModel = model("addresses",addressScheme)
module.exports = addressModel


