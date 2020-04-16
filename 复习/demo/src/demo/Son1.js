import React, { Component } from 'react';
class Son1 extends Component {
  constructor(){
    super()
    console.log('Son 初始化',4)
  }
  state={age:1}
  
  getSnapshotBeforeUpdate(props,state){
    console.log('getSnapshotBeforeUpdate')
    console.log('this',this.state.age)
    console.log('参数',state.age)
    return {xixi:'xixi'}
  }
  componentDidUpdate(props,state,snapshot){
    console.log('componentDidUpdate')
    console.log('snapshot',snapshot)
  }
  render() { 
    console.log('Son渲染',5)
    let {age} = this.state
    return (
    <div>
      <h1>Box</h1>
    <h4>age:{age}</h4>
    <button onClick={()=>{
      this.setState({age:++age})
    }}>changeAge</button>
    </div>
      );
  }
  componentDidMount(){
    console.log('Son 挂载',6)
  }
}
/*
获取更新之前的快照
1getSnapshotBeforeUpdate不能喝已经废弃的生命周期同时使用
2.必须和componentDidUpdate 配对出现
3.能访问对象  this.里存放的是修改后的数据
4.参数里存放的是修改前的数据
5.return的值会作为componentDidUpdate 第三个参数出现
*/  

export default Son1;