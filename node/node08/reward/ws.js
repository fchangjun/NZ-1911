//socket 服务器用来推送消息
const websocket = require('ws')
const ws = new websocket.Server({port:3003})
let clients =[] //用来保存所有的客户端对象
ws.on('connection',(client)=>{
  console.log('客户端已连接')
  // client.send(111)
  clients.push(client)
})
// 广播 给所有的用户发送一条消息
function sendAll(reward){
    let  num = parseInt(Math.random()*4)
 for (let index = 0; index < clients.length; index++) {
    if(num==index){
      clients[index].send('恭喜中奖:获得'+reward)
    }else{
      clients[index].send('谢谢惠顾')
    }
   
 }
}
module.exports ={sendAll}
// // 15s后给所有连接用户发一条消息
// setTimeout(()=>{
//   console.log(222)
//   sendAll()
// },10000)