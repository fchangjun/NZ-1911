import React, { Component } from 'react';
import Store from './store/store'
// 引入该数据的方法 
import ActionCreator from './store/actionCreator'
class Son1 extends Component {
  componentDidMount(){
    // 监听全局状态值发生改变 
    Store.subscribe(()=>{
      // 只要该回调执行了 那就说明全局状态值发生改变需要修改页面
      console.log('全局状态值发生改变的时候触发')
      this.setState({})
    })
  }
  render() { 
    // 获取全局状态值
    let {name,age} = Store.getState()
   
    return (  
      <div>
        <h3>子组件1</h3>
        <p>{name}</p>
        <p>{age}</p>
        <button onClick={()=>{
          ActionCreator.changeName()
        }}>改名</button>
      </div>
    );
  }
}
 
export default Son1;