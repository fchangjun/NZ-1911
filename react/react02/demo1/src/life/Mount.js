import React,{ Component } from "react";

class Mount extends Component{
  constructor(){
    super()
    console.log(this)
    console.log('初始化')
    this.state={
      name:'韩梅梅'
    }
  }
  // UNSAFE_componentWillMount(){

  // }
  componentWillMount(){
    console.log('组价将要挂载')
    // console.log(this)
    // console.log(this.state.name)
    // console.log(this.refs.p)
    // this.state.name = '李雷雷'
    /*
    可以获取this 数据 不能获取dom
    修改数据 可以直接引起页面的改变
    修改数据 不会触发运行中的生命周期
    这个生命周期没啥用 更不要做网络请求
    16.3版本 同步渲染 ->异步渲染（fiber） 
    渲染前的生命周期可以能会被意外情况打断，生命周期会重新执行
    我在这该生命周期放网络请求 会导致请求的多次发出
    该生命周期17版本后会被废弃 现阶段是不安全的生命周期
    */
  }
  componentDidMount(){
    console.log('挂载结束')
    console.log(this)
    console.log(this.state.name)
    console.log(this.refs.p)
    // this.state.name = '李雷雷'
    this.setState({name:'李雷雷'})
    /*
    1. 有dom 有数据  做网络请求 做初始化的操作 初始化swiper better-scroll
    数据的修改不能直接引起页面的改变 需要通过setState 
    数据的修改会触发运行中的生命期
    */ 
  }
  render(){
    console.log('组件渲染了')
    return(
      <div>
        <h6>挂载测试</h6>
        <p ref='p'>{this.state.name}</p>
      </div>
    )
  }
}
export default Mount