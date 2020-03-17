import React, { Component } from 'react';
import './modal.css'
import {withRouter} from 'react-router-dom'
class Modal extends Component {
  
  render() { 
    console.log(this)
    return (  
      <div className='modal'>
        <div className='content'>
          <p>登录状态丢失请重新登录</p>
          <button onClick={()=>{
            this.props.history.replace('/login')
          }}>滚去登录</button>
        </div>
      
      </div>
    );
  }
}
//用withrouter 处理帮助获取路由对象实现编程式导航
export default withRouter(Modal);