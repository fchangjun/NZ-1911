import React, { Component } from 'react';
import Son from './Son'
class Father extends Component {
  state={
    style:{
      width:"200px",
      height:'200px',
      background:'blue'
    }
   }
  render() { 
    return (
    <div style={this.state.style}>
      <h1>父亲</h1>
      <Son></Son>
    </div>
      );
  }
}
 
export default Father;