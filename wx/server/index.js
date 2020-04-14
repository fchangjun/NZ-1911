const express = require('express')
const app = express()
const{responseText,responseMusic} = require('./responseMsg')
// 解析xml数据格式
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
app.use(bodyParser.xml());
app.post('/nz1911',(req,res)=>{
let {xml} = req.body 
console.log(xml)
let {ToUserName,FromUserName} =xml
// 星座对对碰
let content =xml.Content[0]
// let xz1 =content.split('#')[0]
// let xz2 =content.split('#')[1] 
// let result = '' 
// switch (xz1) {
//   case '处女座':
//      switch (xz2) {
//        case '天秤座':
//         result = '不合适分了吧'
//          break;
//        case '双子座':
//           result = '天下绝配'
//            break;
//        default:
//         result ='劝君自习斟酌一下,小命要紧不'
//          break;
//      }
//     break;

//   default:
//     result ='劝君自习斟酌一下,小命要紧不'
//     break;
// }
// console.log(xml)
// let resStr = responseText(ToUserName,FromUserName,result)
// console.log(resStr)
// res.send(resStr)
// 每日音乐 用户发送歌名 
if(content === '音乐'){
  let name='放学别走'
  let desc ='周杰伦的超好痛'
  let media_id='pKzI4ueALEkWL6KCx8AFadP4eB2at5nEPgLmNmJKHAhP7FkhOP4UZWJYucTbgy2t'
  let url = 'https://m10.music.126.net/20200414100848/84491a02c41e1b8400bb8538594f1fae/yyaac/obj/wonDkMOGw6XDiTHCmMOi/2076368740/69be/ae40/c121/7f87342bca9f56e6a0acae8f415df0c9.m4a'
  let resStr =  responseMusic(ToUserName,FromUserName,name,desc,media_id,url)
  console.log(resStr)
  res.send(resStr)
}
console.log(content)
})
app.listen(80,()=>{
  console.log('server start')
})
