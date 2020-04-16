import React, { Component } from 'react';
import ClassComponent  from './ClassComponent'
import FunComponent from './FunComponent'
class Box extends Component {
  state = {  }
  render() { 
    return (
    <div>
      <h1>Box</h1>
      <ClassComponent age='16'></ClassComponent>
      <hr/>
      <FunComponent name='韩梅梅'></FunComponent>
    </div>
      );
  }
}
 
export default Box;