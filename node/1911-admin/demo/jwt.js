/*
1 产生token
2 验证token合法性
*/ 
const jsonwebtoken = require('jsonwebtoken')
let  payload ={ name:'网易',ps:123}
let secret ='sdjflskj13123131'
// let token =jsonwebtoken.sign(payload,secret)
// console.log(token)
let token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi572R5piTIiwicHMiOjEyMywiaWF0IjoxNTgxOTkxOTMyfQ.B8CbpW3rB29QcUFfw404JJizQ1ndg9CyxYY1VOxg27w'
//参数1 要验证的token 参数2产生token的秘钥
let result = jsonwebtoken.verify(token,'sdjflskj1323131')
console.log(result)