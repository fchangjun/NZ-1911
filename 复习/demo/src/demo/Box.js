import React, { Component,PureComponent } from 'react';
class Box extends PureComponent {
  state = { age:1 }
  render() { 
    console.log('render')
    return (
      <div>
        {this.state.age}
        <button onClick={()=>{
          this.setState({age:1})
        }}> 改变</button>
        <h1>Box</h1>
      </div>
      );
  }
}
 
export default Box;