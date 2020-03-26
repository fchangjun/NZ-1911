import React  from 'react'
import LoadAble from 'react-loadable'
// LoadAble高阶组件
function Loading(){
  return(
    <div style={ {width:"100vw",height:"100vh",background:"red"}}> 加载ingg</div>
  )
}
export default LoadAble({
    loader: ()=>import('./index'),       //需要路由懒加载的组件
    loading :Loading       //切换过程中默认显示的组件
})