import React, { Component } from 'react';
class Add extends Component {
  constructor(){
    super()
    this.state={
      age:1
    }
  }
  render() {
    let {age} = this.state 
    return (
    <div>
      <h1>{age}</h1>
      <button onClick={()=>{
        this.setState({age:++age})
      }}></button>
    </div>
      );
  }
}
export default Add;