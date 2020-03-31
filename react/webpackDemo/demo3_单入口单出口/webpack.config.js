const path =require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}
// 单入口单出口 只有一个入口文件 只有一个出口文件
module.exports={
  mode:'development',
  entry:'./demo3/src/hehe.js', // 指明入口文件
  output:{ //出口相关的设置
    path:resolve('./demo3/output'),  //出口的文件夹
    filename:'xixi.js'  // 出口的文件名
  }
}