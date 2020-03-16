import React, { Component, Fragment } from "react";
import {HashRouter,BrowserRouter,NavLink,Link,Route,Switch,Redirect} from 'react-router-dom'
import './nav.css'
import CustomNav from './CustomNav'
function Singer (props){
  console.log('歌手的props',props)
  return(
    <div>这里是歌手组件</div>
  )
}

function Recommend (props){
  console.log('query传参',props)
  return(
    <div>这里是推荐组件</div>
    
  )
}

class Box extends Component{
  render(){
    return(
      <div>
        <h3>编程式导航</h3>
        <HashRouter>
           {/* 编程式导航 */}
            <CustomNav></CustomNav>
           <hr/>
           <Route path='/singer/:us/:ps'  component={Singer}></Route>
           <Route path='/recommend' component={Recommend}></Route>
        </HashRouter> 
      </div>
    )
  }
}

export default Box