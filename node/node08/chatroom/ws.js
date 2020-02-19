//socket 服务器用来推送消息
const websocket = require('ws')
const ws = new websocket.Server({port:3003})
let clients ={} //用来保存所有的客户端对象
ws.on('connection',(client)=>{
  console.log('客户端已连接')
  client.on('message',(message)=>{
    // 处理客户端发送的信息 json字符串
    let {type,msg,name} =JSON.parse(message)
    switch (type) {
      case 'login':
        // 将客户端对象和用户名做关联 
        clients[name]=client
        // console.log('客户端集合',clients) 
        // 通知其他用户xx人进入客户端
        sendAll(name,msg,type)
        break;
      case 'chart':
        // 聊天消息
        sendAll(name,msg,type)
      break
      default:
        break;
    }
  })
})

// 群发 

function sendAll(name,msg,type){
  let obj =null 
  switch (type) {

    case 'login':
      obj={
        type:'welcome',
        msg:  `欢迎${name}进入聊天室`,
        name:name
      }
      break;
    case 'chart':
      obj={
        type:'chart',
        msg:  msg, //发送的消息
        name:name  //说话的人
      }
    break;
    default:
      break;
  }
  // 发送给除了自己之外其他人
  for (const key in clients) {
    // 排除说话人自己
    if(key !== name){
      clients[key].send(JSON.stringify(obj))
    }
  }
}
