import React, { Component, Fragment } from 'react';
import ActionCreatore from './store/actionCreator'
class Box extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        <input type="text" ref='input'/>
        <button onClick={()=>{
          let msg = this.refs.input.value 
          //先发起网络请求 
          // setTimeout(()=>{
            ActionCreatore.addlist(msg)
          // },1000)
        }}>add</button>
      </Fragment>
     );
  }
}
 
export default Box;