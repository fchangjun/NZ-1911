import React, { Component, Fragment } from "react";
import Link from './Link'
import Route from  './Route'
function Singer (){
  return(
    <div>这里是歌手组件</div>
  )
}
function Recommend (){
  return(
    <div>这里是推荐组件</div>
  )
}
class Box extends Component{
  render(){
    return(
      <Fragment>
        <h5>手写路由</h5>
        {/* 控制地址栏改变 */}
        <Link to='/singer'>歌手</Link>
        <Link to='/recommend'>推荐</Link>
        {/* 控制组价的渲染 */}
        <Route path='/singer' component={Singer}></Route>
        <Route path='/recommend' component={Recommend}></Route>
      </Fragment>
    )
  }
}

export default Box