import React, { Component } from 'react';
import {connect} from 'react-redux'
class Son2 extends Component {
  state = {  }
  render() { 
    console.log(this)
    let {name,age} = this.props
    return ( 
      <div>
        <h3>小儿子</h3>
        {name}
        {age}
      </div>
     );
  }
}
export default connect(state=>state)(Son2);
/*
connect 本质是一个方法 返回一个高阶组件
connect()(处理的组件)
conenct 方法有2个参数
参数1叫mapStateToProps 
参数2叫mapDispatchToProps 
*/ 
/*
参数1 mapStateToProps
本质也是一个函数 
特点1 该函数接受全局状态值作为参数
特点2 该函数返回的数据会被映射到当前组件的props里
*/ 
// let mapStateToProps =(state)=>{
 
//   console.log('mapStateToProps',state)
//   return state
// }
// export default connect(mapStateToProps)(Son2);
// state=>state 表示是一个函数 接受state作为参数 返回的也是state
