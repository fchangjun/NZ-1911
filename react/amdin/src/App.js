import React ,{Component} from 'react';
import {HashRouter,Route} from 'react-router-dom'
import loadalbe from "./utils/loadable"
// import  Admin from  './pages/Admin'
// import  Login from './pages/Login'
// import  Login from './pages/Login/loadableLogin'
import User from './pages/User'
import GoodsInfoList from './pages/Goods/GoodsList'
import GoodsInfoAdd from './pages/Goods/GoodsAdd'
import GoodsInfoUpdate from  './pages/Goods/GoodsUpdate'
import GoodsKindList from  './pages/GoodsKind/GoodkindList'
import Admins from './pages/Administartor'
import EchartsPie from './pages/Echarts/Pie'
import EchartsLine from  './pages/Echarts/Line'
import EchartsBar  from './pages/Echarts/Bar'
import TokenModal from './components/TokenModal'
const Login = loadalbe(()=>import('./pages/Login'))
const Admin = loadalbe(()=>import('./pages/Admin'))
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
                <Route path='/admin/goodsInfo' component={GoodsInfoList}></Route>
                <Route path='/admin/goodsInfoAdd' component={GoodsInfoAdd}></Route>
                <Route path='/admin/goodsInfoUpdate/:id' component={GoodsInfoUpdate}></Route>
                <Route path='/admin/goodskind' component={GoodsKindList}></Route>
                <Route path='/admin/administrator' component={Admins}></Route>
                <Route path='/admin/echarts/pie' component={EchartsPie}></Route>
                <Route path='/admin/echarts/line' component={EchartsLine}></Route>
                <Route path='/admin/echarts/bar' component={EchartsBar}></Route>
                
             
            </Admin>
          )
        }}></Route>
        <TokenModal></TokenModal>
      </HashRouter>
    );
  }
}
 
export default App;



