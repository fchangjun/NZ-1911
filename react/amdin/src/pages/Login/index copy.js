import React, { Component } from 'react';
import api from '../../api/index.js'
console.log(api)
class Login extends Component {
  constructor(){
    super()
    this.state={
      userName:'',
      passWord:''
    }
  }
  // async 
  // login=async ()=>{
  // let {userName,passWord} = this.state
  // let result = await api.login({userName,passWord})
  // console.log(result)
  // }
  // 链式调用
  login=()=>{
    let {userName,passWord} = this.state
    api.login({userName,passWord})
    .then(()=>{})
    .catch((err)=>{})
  }
  render() { 
    let {userName,passWord} = this.state
    return ( 
      
      <div>
        用户名:<input type="text" value={userName} 
          onChange={(e)=>{
            this.setState({userName:e.target.value})
          }}
        /><br/>
        密码:<input type='password' value={passWord}
          onChange ={(e)=>{
            this.setState({passWord:e.target.value})
          }}
        /><br/>
        <button onClick={this.login}>登录</button>
      </div>
     );
  }
}
 
export default Login;