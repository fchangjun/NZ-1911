import React, { Component, Fragment } from "react";
import {HashRouter,BrowserRouter,NavLink,Link,Route} from 'react-router-dom'
import './nav.css'
function Singer (props){
  console.log('歌手的props',props)
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
        {/* BrowserRouter HashRouter 哈希路由和历史路由 所有的路由组件都要放到router里 */}
        <BrowserRouter>
        {/*控制地址栏改变 */}
            {/* <Link to='/singer'>歌手</Link> */}
            {/* 路由跳转后所有的属性 都可以在目标组件的props里进行接受 */}
            {/* <Link to={ {
              pathname: "/singer",
              search: "?sort=name",
              hash: "#the-hash",
              state: { fromDashboard: true }
            } }>歌手</Link>
            <Link to='/recommend'>推荐</Link> */}
            {/* exact 属性路径和地址栏路径完全匹配 */}
            <NavLink exact to='/singer' activeClassName='selected' className='nav'> 歌手</NavLink>
            {/* <NavLink exact to='/singer/recommend' activeClassName='selected' className='nav'> 测试</NavLink> */}
            <NavLink exact to='/recommend' activeClassName='selected' className='nav'> 推荐</NavLink>
          {/* 根据地址栏改变渲染不同的组件 */}
          {/* router-view 只能显示一个组件 route路径匹配几个显示几个 */}
          {/* exact 地址栏路径必须和path完全一致 */}
            <Route exact path='/singer' component={Singer}></Route>
            <Route exact path='/recommend' component={Recommend}></Route>
            <Route exact path='/singer/test' component={Singer}></Route>
        </BrowserRouter>

        <hr/>
        {/* 正常的组件内部是没有路由对象的 被路由处理过的组件才有路由对象 */}
        {/* <Singer></Singer> */}
      </div>
    )
  }
}

export default Box