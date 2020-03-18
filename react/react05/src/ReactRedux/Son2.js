import React, { Component } from 'react';
import {connect} from 'react-redux'
import ActionCreatore from './store/actionCreator'
import {bindActionCreators} from 'redux'
class Son2 extends Component {

  render() { 
    console.log(this)
    let {name,age} = this.props
    return ( 
      <div>
        <h3>小儿子</h3>
        {name}
        {age}
        {/* 没有添加connect的第二个参数 */}
        {/* <button onClick={
          ()=>{
            // 获取action 
           let action = ActionCreatore.CHANGE_AGE()
           //通过props的dispath 手动的发送
           this.props.dispatch(action)
          }
        }>改年龄</button> */}
        {/*触发mapDispatch映射的方法 */}
        {/* <button onClick={this.props.fun1}></button> */}
        <button onClick={this.props.CHANGE_AGE}>改名</button>
      </div>
     );
  }
}
// export default Son2
// bindActionCreators 自动的发送action 不需要手动的发送了
export default connect(state=>state,dispatch=> 
  bindActionCreators(ActionCreatore,dispatch))(Son2);
/*
connect 本质是一个方法 返回一个高阶组件
connect()(处理的组件)
conenct 方法有2个参数
参数1叫mapStateToProps 
参数2叫mapDispatchToProps 
*/ 
/*
参数1 mapStateToProps 将全局状态值映射到props里
本质也是一个函数 
特点1 该函数接受全局状态值作为参数
特点2 该函数返回的数据会被映射到当前组件的props里
*/ 
// let mapStateToProps =(state)=>{
 
//   console.log('mapStateToProps',state)
//   return state
// }
/*
在这里所有的叫dispatch都是一个东西 strore对象下的dispatch方法 用来发送action 给老佛爷
参数2 mapDisPatchToProps 作用就是将dispatch 映射到props里
mapDisPatchToProps 本质也是一个函数 
1.可以接dispatch 作为参数 
2.return的对象也会映射到props里
mapDispatchToProps 如果为空 将dispath 映射到props里 
如果不为空 将return的对象映射到props里
*/

// let mapDispathcToProps=(dispatch)=>{
//   //  console.log(dispatch)
//   //  return{
//   //    fun1(){ 
//   //      console.log('fun1')
//   //      let action = ActionCreatore.CHANGE_AGE()
//   //      dispatch(action)
//   //     }
//   //  }
//   return bindActionCreators(ActionCreatore,dispatch)
// }

// export default connect(mapStateToProps,mapDispathcToProps)(Son2);
// state=>state 表示是一个函数 接受state作为参数 返回的也是state
