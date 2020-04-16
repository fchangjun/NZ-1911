import React, { Component } from 'react';
import {NameContext} from './NameContext.js'
import Frather from './Father'
console.log(NameContext)
class Box extends Component {
  state={
    name:'韩梅梅',
    style:{
      width:"300px",
      height:'300px',
      background:'yellow'
    }
   }
  changeName(name){
    this.setState({name})
  }
  render() { 
    return (
    //在父组件注册上下文
    <NameContext.Provider value={ this.state.name}>
      <div style={this.state.style}>
        <h1>Box</h1>
        <button onClick={this.changeName.bind(this,'李雷雷')}>改名</button>
        {this.state.name}
        <Frather></Frather>
      </div>
    </NameContext.Provider>
      );
  }
}
 
export default Box;