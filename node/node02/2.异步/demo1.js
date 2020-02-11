// 多个异步操作需要按照一定顺序执行
// 回调嵌套=>回调地狱
function num1(){
  setTimeout(()=>{
    console.log(1)
    num2()
  },3000)
}

function num2(){
  setTimeout(()=>{
    console.log(2)
    num3()
  },2000)
}


function num3(){
  setTimeout(()=>{
    console.log(3)
  },1000)
}
num1()
