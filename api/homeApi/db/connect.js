let dburl ='mongodb+srv://fangchangjun:heheda@cluster0-0lhtw.mongodb.net/yimei?retryWrites=true&w=majority'
// let dburl = 'mongodb://localhost:27017/yimei'
// let dburl='mongodb+srv://nz1911:nz1911@hehe-lux5t.mongodb.net/nzteam?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.connect(dburl,{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false });
// mongoose.set('useFindAndModify', false);
var db = mongoose.connection;
db.on('error',()=>{
  console.log("数据库连接失败")
});
db.once('open', function() {
  console.log('数据库连接成功')
})