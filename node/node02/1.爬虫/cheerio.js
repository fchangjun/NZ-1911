const cheerio = require('cheerio')
// 处理html格式字符串 处理完毕后可以使用jq的语法
const $ = cheerio.load('<p id="p1">呵呵哒</p>')
 
console.log($('#p1').text())