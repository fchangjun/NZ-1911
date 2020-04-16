import React, { Component } from 'react';
import {NameContext} from './NameContext'
class Son extends Component {
  // 将上下文放入使用组件的静态属性里
  static contextType = NameContext
  state={
   style:{
     width:"100px",
     height:'100px',
     background:'red'
   }
  }
  render() { 
    console.log(this)
    return (
    <div style={this.state.style}>
      <h1>Son</h1>
      {this.context}
    </div>
      );
  }
}
 
export default Son;