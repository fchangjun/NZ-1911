import React, { Component } from 'react';
import store from './store/store'
import ActionCreator from  './store/actionCreator'
class Son1 extends Component {
  componentDidMount(){
    // 监听老佛爷的异动
    store.subscribe(()=>{
      this.setState({})
    })
  }
  render() {    
    let {name,age} = store.getState()
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
 
export default Son1;