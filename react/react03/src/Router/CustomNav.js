import React,{Component}from 'react';
import {withRouter} from "react-router-dom"
class CustomNav extends Component {
   jump=(path)=>{
    // 动态导航传参  
    let us='网易'
    let ps='123'
    // this.props.history.push(`/singer/${us}/${ps}`)
    // this.props.history.push({pathname:'/singer',params:{us,ps}})
    // query传参
    // this.props.history.push(`/recommend?us=${us}&ps=${ps}`)
    //state传参
      // this.props.history.push({pathname:'/recommend',state:{us,ps}})
   }
   render() {
     return (
        <ul>
          <li onClick={this.jump.bind(this,'/singer')}>歌手</li>
          <li onClick={this.jump.bind(this,'/recommend')}>推荐</li>
        </ul>  
     )
   }
}
 
let NewComponent =withRouter(CustomNav)
// withRouter是一个函数 接受一个组件作为参数
// 返回一个新的组件 在新的组件的props里会被注入路由对象
// withRouter的作用处理一个组件给处理的组件添加路由对象
export default NewComponent ;