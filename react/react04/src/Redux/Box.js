import React, { Component } from 'react';
import Store from './store/store'
// 引入小皇帝
import  ActionCreator from './store/actionCreator'
import Son1 from './Son1'
console.log('小皇帝',Store)
class Box extends Component {
  componentDidMount(){
    Store.subscribe(()=>{
      this.setState({})
    })
  }
  render() { 
    // 获取全局状态值
    // console.log(Store.getState())
    // getState 获取的值就是老佛爷返回的值
    let {name,age} = Store.getState()
   
    return (  
      <div>
        <h3>垂帘听政</h3>
        <button onClick={()=>{
            ActionCreator.changeAge(888)
        }}>长大</button>
        <p>{name}</p>
        <p>{age}</p>
        <hr/>
        <Son1></Son1>
      </div>
    );
  }
}
 
export default Box;