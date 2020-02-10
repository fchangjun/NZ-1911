/*
创建文件夹 mkdir
删除文件夹 rmdir
修改文件夹 rename
读取文件夹 readdir
*/

// 引入文件相关的模块
const fs = require('fs')
// console.log(1)
// fs.mkdir('./hehe',(err)=>{
//   console.log(2)
//   console.log(err)
// })
// console.log(3)
// let result = fs.mkdirSync('./haha')
// console.log(result)

// fs.rmdir('./hehe',(err)=>{
//   if(err){ console.log('删除失败')}
//   else{console.log('删除成功')}
// })
// let reuslt  = fs.rmdirSync('./test')
// console.log(reuslt)

// fs.rename('./xixi','./demo',(err)=>{
//   console.log(err)
// })
fs.readdir('./',(err,infos)=>{
  // err 读取状态  infos 读取到的内容
  console.log(err,infos)
})