import React, { Component } from 'react';
class Son extends Component {
  constructor(){
    super()
    console.log('Son 初始化',4)
  }
  state={
    age:1
  }
  // UNSAFE_componentWillMount(){
  //   console.log('组件将要挂载')
  // }
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps')
    console.log('statea.age',state.age)
    if(state.age<10){
      return null
    }else{
      return {age:999}
    }
  }
  render() { 
    console.log('Son渲染',5)
    return (
    <div>
      <h1>Box</h1>
    <h4>age:{this.state.age}</h4>
      <button onClick={()=>{
        this.setState({age:++this.state.age})
      }}>changeAge</button>
    </div>
      );
  }
  componentDidMount(){
    console.log('Son 挂载',6)
  }
}
/*
getDerivedStateFromProps 
1. 不能已经废弃的生命周期一块用
2. 这是个静态函数
3. 必须return 值
4. 在初始化之后渲染之前 执行一次 类似于 willmount
5. 数据(props state)改变之后也会执行
6. 生命周期内部不能获取当前组件对象 灭有this
7. 参数一props 参数2 是state props和state 将要变成的值
8. 返回值 如果null 按照参数里的数据进行更新界面
9. 返回值是一个对象 按照返回值来更新界面

静态函数 静态属性 
静态 之后再类的内部可以调用 类的实例不能调用
其他的动态函数  类内部可以调用 实例也可以调用
*/  

export default Son;