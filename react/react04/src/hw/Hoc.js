import React, { Component } from 'react';
import { Fragment } from 'react';
import Modal from './Modal'
export default (TmpComponet)=>{
//  创建一个新的组件并且返回
class NewComponent extends Component {
  constructor(){
    super()
    this.state={
      isLogin:false
    }
  }
  componentDidMount(){
    let isLogin = localStorage.getItem('isLogin')
    this.setState({isLogin})
  }
  render() {
    let {isLogin} = this.state 
    return ( 
      <Fragment>
        {isLogin==='null'?<Modal/>:<TmpComponet/>}
      </Fragment>
     )
  }
}
 
// 返回组件
return NewComponent

}