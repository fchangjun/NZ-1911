
const express = require("express")
const fs = require('fs')
const XLSX = require('xlsx')
const app = new express() 

let arr =[
  ['名字','年龄','性别'],
  ['呵呵','16','0'],
  ['呵呵1','16','0']
]
let  sheet =XLSX.utils.aoa_to_sheet(arr)
let  book = XLSX.utils.book_new()
XLSX.utils.book_append_sheet(book,sheet)
XLSX.writeFile(book,'hehe.xlsx')

// 返回数据的接口 
app.get('/getelsx',(req,res)=>{
  let file = fs.readFileSync('./hehe.xlsx')
  // 让文件作为附件的形式下载
  res.attachment('商品.xlsx')
  console.log(file)
  res.send(file)
})
 app.listen(3000,()=>{
  console.log("server start")
})