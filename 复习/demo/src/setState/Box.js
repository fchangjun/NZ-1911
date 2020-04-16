import React, { Component } from 'react';
class Box extends Component {
  state = { age:1}
  componentDidMount(){
  //  console.log(this.state.age)
  //  this.setState({age:2},()=>{
  //   //  state 修改完毕执行的回调
  //    console.log(this.state.age)
  //  })
  //  console.log(this.state.age)
  // 同步的情况下 合并更新队列 只会触发一次render 
  // this.setState({age:2})
  // this.setState({age:3})
  // this.setState({age:4})
  // this.setState({age:5})
  setTimeout(()=>{
    this.setState({age:2})
    this.setState({age:3})
    this.setState({age:4})
    this.setState({age:5})
  },1000)
  }
  render() { 
    console.log('render')
    return (
    <div>
      <h1>Box</h1>
      {this.state.age}
    </div>
      );
  }
}
 
export default Box;