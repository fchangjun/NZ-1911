const path = require('path')
module.exports={
  mode:"development",
  entry:{
    wy:'./demo4/src/xixi.js',
    wr:"./demo4/src/hehe.js"
  },
  output:{
    path:path.join(__dirname,"./demo4/dist"),
    filename:'[name]_[hash].js'
    // name 代表的是入口的key值
    // hash 唯一不重复的hash 如果打包文件没有发生改变 hash 不会改变 不会重复打包 
  }
}