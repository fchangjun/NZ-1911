/*
async 
1.修饰符处理一个函数 可以让一个函数返回一个promise对象
2.在函数内部只要不出错 都是走then的回调 reject  抛出错误
3.函数内部 return 的数据就是then里接受的数据 不return 相当于return的undeined
await 
1.修饰符 来修饰一个promise对象 
2.可以将异步变成同步 
3.不能单独使用  只能在async 函数里使用

*/ 
/* async 基本案例
async function sum(){
  console.log('1')
  // throw '这里出错了' 抛出错误字符串
  // throw new Error('这里出错了') 抛出错误对象
  console.log('2')
  // return 213
}
// 如果没有async 得到是undefined 有async得到promise对象
// console.log(sum())
sum()
.then((res)=>{
  console.log('then',res)
})
.catch((err)=>{
  console.log('catch',err)
})
*/ 
/*await 

function num1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject(666)
    },2000)
  })
}

function num2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(888)
    },1000)
  })
}

async function sum(){
  // n1 n2 就是promiseresolve的参数
   let n1 =await num1()
   let n2 =await num2()
   return n1+n2
}

sum()
.then((res)=>{
console.log('then',res)
})
.catch((err)=>{
  console.log('catch',err)
})
*/

function num1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(666)
    },2000)
  })
}

async function sum(){
   let n1 = await num1()
  //  await 修饰一个promise对象 返回值就成了 内部resolve的参数
}
sum()