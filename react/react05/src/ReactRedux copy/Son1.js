import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from './store/actionCreator';
class Son1 extends Component {

  render() { 
    let {name,age} = this.props
    return ( 
      <div>
        <h3>大儿子</h3>
        {name}
        {age}
        <button onClick={()=>{
         this.props.CHANGE_NAME()
        }}>改名</button>
      </div>
     );
  }
}
 
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(actionCreator,dispatch)
})(Son1);