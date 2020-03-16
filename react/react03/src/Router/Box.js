import React, { Component, Fragment } from "react";
import {HashRouter,Link,Route} from 'react-router-dom'
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
      <div>
        <h3>路由的基本使用</h3>
        <HashRouter>
            <Link to='/singer'>歌手</Link>
            <Link to='/recommend'>推荐</Link>
            <Route path='/singer' component={Singer}></Route>
            <Route path='/recommend' component={Recommend}></Route>
        </HashRouter>
      </div>
    )
  }
}

export default Box