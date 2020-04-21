function sumBig(a,b){
  let arrA=a.toString().split('')
  let arrB=b.toString().split('')
  let reuslt =''
  let carry=0
  while(arrA.length||arrB.length||carry){
    carry+=~~(arrA.pop())+~~(arrB.pop())
    reuslt= carry%10+reuslt
    carry=carry>9 
  }
  console.log(reuslt)
}
sumBig(123456,666666)