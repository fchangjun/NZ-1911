/*
处理token的缓存
判断本地是否有数据 
将token 缓存到本地 7000s
*/
const fs = require('fs')
const path = require('path')
const {getAccessToken} = require(path.join(__dirname,'../../api/index'))
console.log('getAccessToken',getAccessToken)
const File = path.join(__dirname,'./access_token.json')
// 将token  写入到本地
/*
writeToken 
从网络请求token 
保存到本文件里
*/
async function writeToken(){
  let {data} = await getAccessToken()
  // 数据存入本地文件json 
  // 将token 以及自己维护的过期时间存入本地
  let content = JSON.stringify({data,expires:(new Date()).getTime()})
  let wReuslt =fs.writeFileSync(File,content)
  return data.access_token
}
/*
getToken 
用户获取本地保存的token
*/ 
async function getToken(){
  // 捕获第一次文件没有的错误
  try { 
    let rResult = fs.readFileSync(File,'utf8')
    let {data,expires} = JSON.parse(rResult)
    //判断过期时间
    if((new Date().getTime())-expires<=700000){
      console.log('没过期')
      return data.access_token
    }else{
      console.log('过期了')
      let token  = await writeToken()
      return token
    }
  } catch (error) {
    let token  = await writeToken()
    return token
  }
}
module.exports={getToken}
// getToken().then((res)=>{
//   console.log(res)
// })