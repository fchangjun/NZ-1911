
/*
在express 中 内置中间件只有一种 
静态资源路径 php  www
指定一个文件夹 让该文件夹和www目录有相同的功能
*/ 
const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname,'./www')))
// 指定www文件夹为静态资源目录

app.listen(3000,()=>{
  console.log('服务器启动')
})