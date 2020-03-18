import React, { Component } from 'react';
import {connect} from 'react-redux'
import actionCreator from './store/actionCreator'
import {bindActionCreators} from 'redux'
class Son2 extends Component {

  render() { 
    let {name,age} = this.props
    return ( 
      <div>
        <h3>小儿子</h3>
        {name}{age}
        {/* 该年龄 */}
        {/* <button onClick={()=>{
          let action = actionCreator.CHANGE_AGE()
          dispatch(action)
        }}>长大</button> */}
        {/* 改名字 */}
        {/* <button onClick={()=>{
          let action = actionCreator.CHANGE_NAME()
          dispatch(action)
        }}>改名</button> */}

        <button onClick={this.props.CHANGE_NAME}>改名</button>
        <button onClick={this.props.CHANGE_AGE}>长大</button>
      </div>
     );
  }
}
/*
mapDispatchToProps  是个函数 接受dispath作为参数 返回的值映射到props里
*/ 
export default connect(state=>state,(dispatch)=>{
  // return{
  //     CHANGE_NAME(){
  //       console.log('点到了呵呵')
  //       let actions =actionCreator.CHANGE_NAME()
  //       dispatch(actions)
  //     },
  //     CHANGE_AGE(){
  //       let actions = actionCreator.CHANGE_AGE()
  //       dispatch(actions)
  //     }
  // console.log(bindActionCreators(actionCreator))
  // 映射actionCreator 里所有的方法
  return bindActionCreators(actionCreator,dispatch)
  // }
})(Son2)