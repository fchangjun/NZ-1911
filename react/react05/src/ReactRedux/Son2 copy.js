import React, { Component } from 'react';
import {connect} from 'react-redux'
import actionCreator from './store/actionCreator'
class Son2 extends Component {

  render() { 
    let {name,age,dispatch} = this.props
    return ( 
      <div>
        <h3>小儿子</h3>
        {name}{age}
        {/* 该年龄 */}
        <button onClick={()=>{
          let action = actionCreator.CHANGE_AGE()
          dispatch(action)
        }}>长大</button>
        {/* 改名字 */}
        <button onClick={()=>{
          let action = actionCreator.CHANGE_NAME()
          dispatch(action)
        }}>改名</button>
      </div>
     );
  }
}
/*
mapDispatchToProps  是个函数 接受dispath作为参数 返回的值映射到props里
*/ 
export default connect(state=>state)(Son2)