
// setTimeout(()=>{
//   console.log(1)
// },0)

new Promise((resolve,reject)=>{
  console.log(2)
  setTimeout(()=>{
    console.log(3)
    resolve()
  },1000) 
}).then(()=>{
  console.log(4)
})

new Promise((resolve,reject)=>{
  console.log(5)
    resolve()
}).then(()=>{
  console.log(6)
})

// setTimeout(()=>{
//   console.log(4)
// },1000)

// new Promise((resolve,reject)=>{
//   console.log(5)
//   setTimeout(()=>{
//     resolve()
//   },1000)
// }).then(()=>{
//   console.log(6)
// })

// console.log(7)

// 宏任务  1 4
// 同步  2 5 7
// 微任务 3 6

// 2573614 
/*
宏任务 正常的js代码  setTimeout setInerval
微任务 promise   proccess.nextTick
在异步中微任务执行优先级优先于宏任务

事件循环
*/