import React, { Component } from 'react';
class ClassComponent extends Component {

  state = { name:"类组件" }
  render() { 
    console.log(this)
    return ( 
      <div>
        类组件 
        有状态组件
        智能组件
        容器组件
      </div>
     );
  }
}
 
export default ClassComponent;