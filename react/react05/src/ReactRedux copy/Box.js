import React, { Component } from 'react';
import Son1 from "./Son1"
import Son2 from "./Son2"
class Box extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h3>react-redux使用</h3>
        <Son1></Son1>
        <hr/>
        <Son2></Son2>
      </div>
     );
  }
}
 
export default Box;