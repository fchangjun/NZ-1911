import React, { Component, Fragment } from "react";
import {HashRouter,BrowserRouter,NavLink,Link,Route,Switch,Redirect} from 'react-router-dom'
import './nav.css'
function Singer (){
  console.log('歌手的props')
  return(
    <div>这里是歌手组件</div>
  )
}

function My (){
  console.log('我的组件')
  return(
    <div>这里是我的组件

        <Route path='/my/info' component={Info}></Route>
        <Route path='/my/login' component={Login}></Route>

    </div>  
  )
}

function Info(){
  return(
    <div>我的信息</div>
  )
}

function Login(){
  return(
    <div>去登录</div>
  )
}
class Box extends Component{
  render(){
    return(
      <div>
        <h3>嵌套路由</h3>
        <HashRouter>
           <Link to='/singer'>歌手</Link>
           <Link to='/my'>我的</Link>
           <hr/>
           <Route path='/singer/'  component={Singer}></Route>
           {/* <Route path='/my' component={My}></Route> */}
   
           <Route  path='/my/:id' render={()=>{
             return(
               <div>
                 <h3>我的组件</h3>
                 <hr/>  
                  <Link to='/my/info'>我的信息</Link>
                  <Link to='/my/login'>我的登录</Link>
                  <Route path='/my/:id/info' component={Info}></Route>
                  <Route path='/my/:id/login' component={Login}></Route>
               </div>
             )
           }}></Route>
        </HashRouter> 
      </div>
    )
  }
}

export default Box