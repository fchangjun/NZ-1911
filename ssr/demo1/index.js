const Vue = require('vue')
// 创建vue服务器渲染实例
const vueRenderer = require('vue-server-renderer').createRenderer() 
const express = require('express')
const server = express()
// 创建一个vue 实例
let app = new Vue({
  template:"<h1>服务器渲染demo{{name}}{{age}}<button @click='add'>add</button></h1>",
  data() {
    return {
       name:"韩梅",
       age:15
    }
  }
})


server.get('/',(req,res)=>{
  //  进行服务器渲染
vueRenderer.renderToString(app,(err,html)=>{
  if(err){ return false}
  res.send(html)
})
})

server.listen(3000,()=>{
  console.log('服务器启动')
})