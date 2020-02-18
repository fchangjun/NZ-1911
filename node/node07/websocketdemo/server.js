const webscoket = require('ws')
//引入创建socket的模块
const ws = new webscoket.Server({port:3003})
// 监听端口号创建长连接服务器
ws.on('connection',(client)=>{
  // client 客户端的连接对象
  console.log('客户端连接了')
  // 服务端向客户端发消息
  client.send('你好小姐姐')
  client.on('message',(msg)=>{
    console.log('来自客户端的消息',msg)
  })
  client.on('close',()=>{
    console.log('客户端主动断开连接')
  })

})