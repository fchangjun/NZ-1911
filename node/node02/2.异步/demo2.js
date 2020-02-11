// promise pendding  resolve 成功 then函数处理  reject失败 catch函数处理
// promise的链式调用
function num1(){
   return new Promise((resolve,reject)=>{
    // 要做的异步操作
      setTimeout(()=>{
         // 异步成功执行resolve方法 外部用then处理
         //  resolve('韩梅梅')
         // 异步失败执行reject方法 外部用catch处理
         console.log(1)
         resolve()
      },3000)

   })
}
function num2(){
  return new Promise((resolve,reject)=>{
   // 要做的异步操作
     setTimeout(()=>{

        console.log(2)
        resolve()
        // reject('num2出错了')
     },2000)

  })
}
function num3(){
  return new Promise((resolve,reject)=>{
   // 要做的异步操作
     setTimeout(()=>{

        console.log(3)
        resolve()
     },1000)

  })
}
num1()
.then(()=>{
  //num1 执行ok
  console.log('num1 执行ok')
  return  num2()
})
.then(()=>{
  // num2的成功处理
  console.log('num2 执行ok')
  throw '错误信息'
  return  num3()
})
.then(()=>{
  console.log('num3 执行ok')
  //num3 的成功处理
})
.catch((err)=>{
  console.log('出错了')
})

// 在promise的链式调用中任何一个环节出现错误 都会被统一的catch方法捕获 并且终止代码执行
// 在promise的链式调用中想终止链式调用 1.reject 2.主动的抛出一个错误 throw 抛出一个错误
// num1()
// .then((res)=>{
//   //res resolve 方法传递的参数
//   console.log('执行then',res)
// })
// .catch((err)=>{
//   console.log('执行catch',err)
// })

