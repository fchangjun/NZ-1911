const { exec } = require('child_process');
const path = require('path')


let dbhost = '127.0.0.1' //换成线上服务器的ip
let dbname = 'yimei'
let dbdirectory = path.join(__dirname,'../dbtest',dbname)
// 数据库备份

let execString = `mongorestore -h ${dbhost} -d ${dbname} --dir ${dbdirectory}`
exec(execString, (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})
