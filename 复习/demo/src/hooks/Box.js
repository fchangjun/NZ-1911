import React, { Component } from 'react';
// import Add from './Add'
// import UseState from './UseState'
// import UseEffectDemo from './UseEffect'
import UseContextDemo from './UseContext'
import {ColorContext} from './ColorContext'
class Box extends Component {
  state = { show:true }
  render() { 
    return (
    <ColorContext.Provider value='hehe'>
    <div>
      <h1>Box</h1>
      {/* <button onClick={()=>{
        this.setState({show:!this.state.show})
      }}>显示/隐藏</button> */}
      <hr/>
      {/* <Add></Add> */}
      {/* <UseState></UseState> */}
      {/* {this.state.show||<UseEffectDemo></UseEffectDemo>} */}
      
      <UseContextDemo></UseContextDemo>
    </div>
    </ColorContext.Provider>
      );
  }
}
 
export default Box;