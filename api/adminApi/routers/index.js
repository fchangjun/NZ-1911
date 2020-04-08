const fs = require('fs')
const path = require("path")
module.exports= (app)=>{
  let dirs = fs.readdirSync(path.join(__dirname,'./'))
  dirs.forEach(file => {
    if(file !== 'index.js'){
      let router = require(`./${file}`)
      app.use(router.routes())
         .use(router.allowedMethods())
    }
  })
}