import React, { Component } from 'react';
import connect from './connect'
import ActionCreator from  './store/actionCreator'
class Son1 extends Component {
  // componentDidMount(){
  //   // 监听老佛爷的异动
  //   store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }
  render() {    
    // let {name,age} = store.getState()
    let {name,age} = this.props
    return (  
      <div>
        <h3>子组件1</h3>
        <p>姓名：{name}</p>
        年龄:{age}
        <button onClick={()=>{
          ActionCreator.changeAge()
        }}>长大了</button>
      </div>
    );
  }
}
 
export default connect(Son1);