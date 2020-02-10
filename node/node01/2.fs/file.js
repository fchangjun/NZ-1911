/*
创建一个文件 writeFile 覆盖写入
修改一个文件 appendFile
删除一个文件 unlink
读取一个文件 readFile
*/ 
const fs = require('fs')
// fs.writeFile('./hehe.txt','我独自一个人抗下了所有',(err)=>{
//   console.log(err)
// })
// fs.appendFile('./hehe.txt','韩梅梅和李雷',(err)=>{
//   console.log(err)
// })
// fs.unlink('./hehe.txt',(err)=>{
//   console.log(err)
// })
// fs.readFile('./hehe.txt','utf8',(err,data)=>{
//   console.log(err)
//   // buffer 二进制数据流
//   // console.log(data.toString())
//   console.log(data)
// })
// 判断读取的文件类型 
fs.stat('./hehe.txt',(err,state)=>{
  // console.log(state)
  console.log(state.isFile()) //是不是一个文件
  console.log(state.isDirectory()) //是不是一个文件夹
})