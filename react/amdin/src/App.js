import React ,{Component} from 'react';
import {HashRouter,Route} from 'react-router-dom'
import  Admin from  './pages/Admin'
import  Login from './pages/Login'
import User from './pages/User'
import Goods from './pages/Goods'
import Admins from './pages/Administartor'
class App extends Component {
  render() { 
    return (  
      <HashRouter>
        {/* 控制地址栏改变 */}
        {/* 路由 */}
        <Route path='/login' component={Login}></Route>
        {/* <Route path='/admin' component={Admin}></Route> */}
        <Route path='/admin' render ={()=>{
          return(
            <Admin>
                <Route path='/admin/user' component={User}></Route>
                <Route path='/admin/goods' component={Goods}></Route>
                <Route path='/admin/administrator' component={Admins}></Route>
            </Admin>
          )
        }}></Route>
      </HashRouter>
    );
  }
}
 
export default App;



