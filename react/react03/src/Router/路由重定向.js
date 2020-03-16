import React, { Component, Fragment } from "react";
import {HashRouter,BrowserRouter,NavLink,Link,Route,Switch,Redirect} from 'react-router-dom'
import './nav.css'
function Singer (props){
  console.log('歌手的props',props)
  return(
    <div>这里是歌手组件</div>
  )
}
function SingerTest (props){
  return(
    <div>这里是歌手测试组件</div>
  )
}
function Recommend (){
  return(
    <div>这里是推荐组件</div>
  )
}
function NotFound (){
  return(
    <div>你的页面打了样</div>
  )
}
class Box extends Component{
  render(){
    return(
      <div>
        <h3>路由基础2 - switch</h3>
        <BrowserRouter>
          <NavLink exact to='/singer' activeClassName='selected' className='nav'> 歌手</NavLink> 
          <NavLink exact to='/recommend' activeClassName='selected' className='nav'> 推荐</NavLink>
          <NavLink exact to='/singer/test' activeClassName='selected' className='nav'> 歌手测试</NavLink>
          <Switch>
            {/* 小心产生死循环 */}
            <Redirect exact from='/' to ='/recommend'></Redirect>
            <Route exact path='/singer' component={Singer}></Route>
            <Route  path='/recommend' component={Recommend}></Route>
            <Route  path='/singer/test' component={SingerTest}></Route>
           
            <Route component={NotFound}></Route>
          </Switch>
            
        </BrowserRouter>

      
      </div>
    )
  }
}

export default Box