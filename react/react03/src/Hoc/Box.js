import React, { Component } from 'react';
import WelCome from  './WelCome'
import Bye from "./Bye"
class Box extends Component {
  render() { 
    return ( 
      <div>
        <h4>高阶组件</h4>
        <WelCome></WelCome>
        <Bye></Bye>
      </div>
     );
  }
}
 
export default Box;