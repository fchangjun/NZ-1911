import React from 'react';
import { useEffect,useState } from 'react';
function UseEffectDemo(){
  let [age,setAge] = useState(15)
  let [name,setName] = useState('韩梅梅')
  // useEffect(()=>{
  //   console.log('useEffect 页面挂载')
  //   return()=>{
  //     console.log('销毁了')
  //   }
  // },[name])
  // 组件的挂载和销毁 
  useEffect(()=>{
    console.log('组件挂载了')
    return()=>{console.log('组件销毁了')}
  },[])
  // age 更新触发
  // useEffect(()=>{
  //   console.log('age更新了')
  // },[age])
  // name更新触发
  // useEffect(()=>{
  //   console.log('name更新了')
  // },[name])
  // nameage更新触发
  useEffect(()=>{
    console.log('name或者age更新了')
  },[name,age])
  return(
    <div>
      <h1>UseEffect</h1>
      <h5>{age}</h5>
      <button onClick={()=>{ setAge(++age)}}>changeAge</button>
      <hr/>
      <h5>{name}</h5>
      <button onClick={()=>{ setName('李雷雷')}}>changeName</button>
    </div>
  )
} 
export default UseEffectDemo

/*
1.useEffect 本是一个函数  参数是一个回调
2.当页面挂载的时候会执行一次回调 相当于类组件里挂载的生命周期
3.发生更新操作的时候也会执行     相当于组件里更新的生命周期
4.组件销毁的时候触发  回调函数里return的函数相当于销毁的生命周期 
5. useEffec 第二个参数是一个数组 控制那些state可以触发更新的生命周期
*/