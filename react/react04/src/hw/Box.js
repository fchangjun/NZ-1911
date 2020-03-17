import React, { Component } from 'react';
import {HashRouter,NavLink,Route,Switch,Redirect} from 'react-router-dom'
import Singer from './Singer'
import Recommend from "./Recommend"
import Rank from "./Rank"
import Login from './Login'
import './index.css'
class Box extends Component {

  render() { 
    return (  
      <div>
        <h3>check music</h3>
        <HashRouter>
        {/* tab */}
         <NavLink to='/singer' activeClassName='selected'>歌手</NavLink>
         <NavLink to='/recommend' activeClassName='selected'>推荐</NavLink>
         <NavLink to='/rank' activeClassName='selected'>排行</NavLink>
        {/* 路由 */}
        <Switch>
          <Redirect exact from='/' to = '/singer'></Redirect>
          <Route path='/singer' component={Singer}></Route>
          <Route path='/recommend' component={Recommend}></Route>
          <Route path='/rank' component={Rank}></Route>
          <Route path='/login' component={Login}></Route>
          <Route render={()=>{
            return(
              <h1>你的页面走丢了</h1>
            )
          }}></Route>
        </Switch>

        </HashRouter>
      </div>
    );
  }
}
 
export default Box;