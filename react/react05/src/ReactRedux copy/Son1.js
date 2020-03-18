import React, { Component } from 'react';
import {connect} from "react-redux"
import actionCreator from './store/actionCreator';
class Son1 extends Component {

  render() { 
   
    return ( 
      <div>
        <h3>大儿子</h3>
        {this.props.name}
        {this.props.age}
        <button onClick={()=>{
          let action =actionCreator.CHANGE_NAME()
          this.props.dispatch(action)
        }}>改名</button>
      </div>
     );
  }
}
/*connect第一个参数
mapStateToProps
本质就是个函数
接受state作为参数
的返回的数据 映射到props
*/
// let  mapStateToProps=(state)=>{
//   return state 
// }
// export default connect(mapStateToProps)(Son1)
export default connect(state=>state)(Son1)