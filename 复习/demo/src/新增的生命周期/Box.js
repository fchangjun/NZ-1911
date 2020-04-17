import React, { Component } from 'react';
import Son1 from './Son1'
class Box extends Component {
  constructor(){
    super()
    // console.log('box 初始化',1)
  }
  
  render() { 
    // console.log('box渲染',2)
    return (
    <div>
      <h1>Box</h1>
      <Son1></Son1>
    </div>
      );
  }
  componentDidMount(){
    // console.log('box 挂载',3)
  }
}
 
export default Box;