/*
下载一个图片
http 或者https 模块
数据是分段了 data  end error
*/
const https = require('https')
const fs = require("fs")
let url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581400552209&di=aa5a54b558462859cc6d17c67d67267b&imgtype=0&src=http%3A%2F%2Fimgm.gmw.cn%2Fattachement%2Fjpg%2Fsite2%2F20160701%2F0023ae6686b218e05ed132.jpg'

https.get(url,(res)=>{
  // 图片二进制格式
  // res.setEncoding('binary');
  let rawData = ''
  res.on('data',(chunk)=>{
    rawData+=chunk
  })
  res.on('end',()=>{
    console.log(rawData)
    fs.writeFile('./fj.png',rawData,'binary',(err)=>{
      console.log(err)
    })
  })
}).on('error',(err)=>{
  console.log('文件下载失败')
})