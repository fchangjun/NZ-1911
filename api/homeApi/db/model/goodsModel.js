const mongoose = require("mongoose")

let goodsScheme = mongoose.Schema({
		__v :    {type:Number,select:false},
		name:{type:String,required:true},
		desc:{type:String,required:false},
		path:{type:String,required:true},
		link:{type:String,required:false},
		stock:{type:Number,default:0},
		putaway:{type:Number,default:-1},
		price:{type:Number,default:0},
		unit:{type:String,default:"件"},
		kind:{type:mongoose.Schema.Types.ObjectId,ref:"kinds"},
		createTime: {
				type: Date,
				default: new Date().getTime()
				},
				updateTime: {
				type: Date,
				default: new Date().getTime()
		}
	},
	{
		versionKey: false,
		timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
	}
)

let goodsModel = mongoose.model("goods",goodsScheme)
module.exports = goodsModel


