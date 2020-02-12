/*
通过第三方模块request爬取去哪网上的图片
1.爬取目标网站  v 
2.分析目标资源 图片链接
3.根据图片链接将图片下载到本地
*/

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs')
let url = 'https://www.baidu.com'
request(url, function (error, response, body) {
  console.error('error:', error); 
  // 错误信息
  console.log('statusCode:', response && response.statusCode); 
  //返回对象
  // console.log('body:', body);
  // 需要的数据
  let $ = cheerio.load(body)
  $('img').each((index,el)=>{
    console.log('图片'+index)
    let  imgSrc=$(el).attr('src')
    // 给没有协议的连接地址添加协议
    if(imgSrc.indexOf('http://')===-1){
      imgSrc='http:'+imgSrc
    }
    console.log(imgSrc)
    // 根据地址获取图片资源
    loadImg(index,imgSrc)
  })
});

function loadImg(index,src){
  request(src)
  .pipe(fs.createWriteStream(`./${index}.png`))
  // pipe 管道符号 


}