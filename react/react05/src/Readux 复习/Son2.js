import React, { Component } from 'react';
import  Store from './store/store'
class Son2 extends Component {
  state = {  }
  render() { 
    let {name,age} = Store.getState()
    return ( 
      <div>
        <h3>小儿子</h3>
        {name}
        {age}
      </div>
     );
  }
}
 
export default Son2;