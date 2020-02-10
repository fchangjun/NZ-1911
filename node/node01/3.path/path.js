// 在做文件操作通常写的是绝对路径

const fs  = require('fs')
const  path  = require('path')
console.log(__dirname) //当前文件所在文件夹的绝对路径
// const result = path.join(__dirname,'hehe','./a.txt') //将所有的参数拼接成一个路径
// console.log(result)
// js代码执行过程中  ./相对路径 指的是node命令的执行路径
fs.readFile(path.join(__dirname,'./a.txt'),'utf8',(err,info)=>{
  console.log(info)
})