import React from 'react';
function FunComponent(props){
  console.log(props)
  return(
    <div>
      {props.name}
      函数组件
      无状态组件
      ui组件
      傻瓜组件
    </div>
  )
}
export default FunComponent