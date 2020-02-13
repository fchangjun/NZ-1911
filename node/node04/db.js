// 连接数据库 27017 默认端口号
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/1911', {useNewUrlParser: true,useUnifiedTopology: true });

var db = mongoose.connection //数据库的连接对象
db.on('error',()=>{ console.log('数据库连接失败')});
db.once('open', function() {
  console.log('数据库第一次连接成功')
});

// 创建schema对象 相当于创建表头
var foodSchema = new mongoose.Schema({
    name : { type:String},
    age  : { type:Number}
});
// schema对象中声明的字段就是需要的字段 多余的不被处理
// 将schema对象和数据集合进行关联
// mongoose.model(要关联的集合名,schema对象 );
// 要关联的集合名如果写的是单数形式 mongoose 自动的编程复数形式
var foodModel = mongoose.model('hehe', foodSchema)

// 执行查询语句
// foodModel.insertMany({name:'你好',age:'hehe'})
// .then((data)=>{
//   console.log('then',data)
// })
// .catch((err)=>{
//   console.log('catch',err)
// })
// 查询操作
foodModel.find()
.then((data)=>{
  console.log('then',data)
})
.catch((err)=>{
  console.log('catch',err)
})
// 删除操作
// foodModel.remove({_id:'5e44ef744f66fe0eefcf0d8c'})
// .then((data)=>{
//   console.log('then',data)
// })
// .catch((err)=>{
//   console.log('catch',err)
// })
// 更新
// foodModel.updateOne({_id:'5e44efae11e5950efcc6f954'},{$set:{name:'咒怨'}})
// .then((data)=>{
//   console.log('then',data)
// })
// .catch((err)=>{
//   console.log('catch',err)
// })