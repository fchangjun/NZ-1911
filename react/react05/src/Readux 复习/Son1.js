import React, { Component } from 'react';
import  Store from './store/store'
import ActionCreatore from './store/actionCreator'
console.log(ActionCreatore)
class Son1 extends Component {
  componentDidMount(){
    Store.subscribe(()=>{
      this.setState({})
    })
  }
  render() { 
    let {name,age} = Store.getState()
    return ( 
      <div>
        <h3>大儿子</h3>
        {name}
        {age}
        <button onClick={()=>{
          ActionCreatore.CHANGE_NAME()
        }}>改名</button>
      </div>
     );
  }
}
 
export default Son1;