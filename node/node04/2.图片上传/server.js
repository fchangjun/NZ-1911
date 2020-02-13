const express = require('express')
const  bodyParse = require('body-parser')
const  fs = require('fs')
const  path = require('path')
var multer  = require('multer')
// 创建multer对象 
var upload = multer({})
const app = express()

app.use('/public',express.static(path.join(__dirname,'./www')))
// 上传图片必须用post方式

app.post('/file',upload.single('xixi'),(req,res)=>{
  // req.file 上传的文件信息默认是不存在的  只有被multer中间件处理过之后才有
  console.log(req.file)
  // buffer 上传的图片的数据
  let  {buffer,mimetype,size,originalname} = req.file 
  // 将buffer写入到文件内部
  // 防止文件被覆盖 保证文件名的唯一性
  let name=(new Date()).getTime()+'_'+parseInt(Math.random()*767457165)+parseInt(Math.random()*12313)
  // 让后缀名 和源文件保持一致
  let ext = originalname.split('.')[1]
  fs.writeFile(path.join(__dirname, `./www/${name}.${ext}`),buffer,(err)=>{
     if(err){
       res.send({err:0,msg:'图片上传失败'})
     }else{
       res.send({err:0,msg:'图片上传0k'})
     }
  })
})

app.listen(3000,()=>{
  console.log('服务器启动')
})