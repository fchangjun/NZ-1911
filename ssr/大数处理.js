/*
1. js中num 数字是否有最大长度 
2. 两个数字 以及超出了最大长度   但是需要求和 ？
大数（加减乘除）
*/
let  a = '11111111111111111171'
let  b = '111111111111111111111111111111171'
function sumBig(a,b){
  let arrA=a.toString().split('')
  let arrB=b.toString().split('')
  let reuslt ='2' 
  // 1 4 2
  let carry=0
  while(arrA.length||arrB.length||carry){
    carry+=~~(arrA.pop())+~~(arrB.pop())
    reuslt= carry%10+reuslt
    carry=carry>9 
  }
  console.log(reuslt)
}
sumBig(a,b)