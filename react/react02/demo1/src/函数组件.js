import React from  'react'
// 接受props数据渲染界面
function App(props){
  console.log(this,props)
  return(
    <div>
      这里是函数组件 {props.name}
    </div>
  )
}
export default App