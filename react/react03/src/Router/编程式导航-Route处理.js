import React, { Component, Fragment } from "react";
import {HashRouter,Route} from 'react-router-dom'
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
        <h3>编程式导航</h3>
        <HashRouter>
           {/* 编程式导航 */}
        
           <hr/>
           <Route path='/singer' component={Singer}></Route>
           <Route path='/recommend' component={Recommend}></Route>
        </HashRouter> 
      </div>
    )
  }
}

export default Box