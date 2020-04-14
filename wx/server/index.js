const express = require('express')
const app = express()
const {deleteMenu,searchMenu,createMenu} = require('./api/index')
const {getToken} = require('./utils/token/index')
console.log('getToken',getToken)
const{responseText,responseMusic} = require('./responseMsg')
// 解析xml数据格式
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
app.use(bodyParser.xml());
// 接受用户发送额数据
app.post('/nz1911',(req,res)=>{
  let {xml} = req.body 
  console.log(xml)
  let {ScanCodeInfo} =xml 
  if(ScanCodeInfo){
    console.log(JSON.stringify(ScanCodeInfo))
  }
})
// 删除自定义菜单
app.get('/deletemenu',async (req,res)=>{
  let token = await getToken()
 let reuslt = await deleteMenu(token)
 res.send(reuslt.data)
})
// 查询自定义菜单
app.get('/searchmenu',async (req,res)=>{
  let token = await getToken()
  let result = await searchMenu(token)
  res.send(result.data)
 })
 // 创建自定义菜单
app.get('/createmenu',async (req,res)=>{
  let token = await getToken()
  let reuslt = await createMenu(token)
  res.send(reuslt.data)
 })
app.listen(80,()=>{
  console.log('server start')
})
