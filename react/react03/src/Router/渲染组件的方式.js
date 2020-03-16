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
          {/* 通过component创建组件 */}
          {/* <Route exact path='/singer' component={Singer}></Route>
          <Route exact path='/singer' component={(props)=>{
            console.log(props)
            return(
              <div>
                这是函数创建的组件
              </div>
            
            )
          }}></Route> */}
          {/* 通过render 属性显示组件 */}
          {/* <Route  path='/recommend' render={Recommend}></Route>
          <Route  path='/recommend' render={()=>{
            return(
              <div>
                render 渲染的组件
              </div>
            )
          }}></Route> */}
          {/* 通过clildren 创建组件 */}
          <Route  path='/recommend' children={Recommend} ></Route>
          <Route  path='/recommend' children={()=>{
            return( <div>这里是children 创建的组件</div>)
          }}></Route>
        </BrowserRouter>

      
      </div>
    )
  }
}

export default Box