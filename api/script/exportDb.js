const { exec } = require('child_process');
const path = require('path')

let dbdirectory = path.join(__dirname,'../dbtest')
let dbhost = '127.0.0.1'
let dbname = 'yimei'
// 数据库备份
let execString = `mongodump -h ${dbhost} -d ${dbname} -o ${dbdirectory}`
exec(execString, (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})
