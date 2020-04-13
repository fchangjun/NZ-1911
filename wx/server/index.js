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
  let url = 'http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400003mBrF72dILfK.m4a?guid=1843684080&vkey=D2A4D2ADCDD29059C114FFCE93E183826522A25D54947BCE5E78D21F3BDC4823ACFD32BFDCAB642B7314A97725A420D7D72154C5E3237573&uin=0&fromtag=38'
  let resStr =  responseMusic(ToUserName,FromUserName,name,desc,media_id,url)
  console.log(resStr)
  res.send(resStr)
}
console.log(content)
})
app.listen(80,()=>{
  console.log('server start')
})
