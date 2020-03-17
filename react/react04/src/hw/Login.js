import React, { Component } from 'react';

class Login extends Component {

  render() { 
    return (  
      <div>
        <h6>这里是登录</h6>
        <button onClick={()=>{
          localStorage.setItem('isLogin',true)
        }}>登录</button>
      </div>
    );
  }
}
 
export default Login;