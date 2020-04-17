import React,{ useState } from 'react';
function UseStateDemo (){
 let  [age,setAge] = useState(15)
 let  [name,hehe] = useState('韩梅梅')
 let  test = useState('呵呵')
 console.log('test',test)
//  let  [变量名,修改这个变量的方法] = useState(变量的初始值)
 return(
   <div>
     <h1>UseState</h1>
     <h4>年龄{age} 名字：{name}</h4>
     <button onClick={()=>{
       setAge(++age)
     }}>add</button>
      <hr/>
    <button onClick={()=>{
       hehe('李雷雷')
     }}>改名</button>
   </div>
 )
}
export default UseStateDemo
/*
函数组件本身只能使用  props 而且不能修改 所以函数组件只能做渲染作用
userState 这一个hook 赋予了函数组件state的功能 可以在函数组件里修改数据  
*/ 