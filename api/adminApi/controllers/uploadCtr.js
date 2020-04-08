const path = require("path")
class uploadCtr{
  uploadImg(ctx){
   let file =ctx.request.files.hehe
   let baseName = path.basename(file.path)
  //  console.log(path)
   ctx.body={code:0,msg:"图片上传ok",path:`/upload/${baseName}`}
  }
 
  
}
module.exports =new uploadCtr()
