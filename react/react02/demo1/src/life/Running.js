import React,{ Component } from "react";

class Running extends Component{
  constructor(){
    super()
    this.state={
      name:'韩梅梅'
    }
  }
  componentWillMount(){
    console.log('组价将要挂载')
  }
  componentDidMount(){
    console.log('挂载结束')
  }
  shouldComponentUpdate(){
    console.log('数据变了')
  }
  render(){
    console.log('组件渲染了')
    return(
      <div>
        <h6>运行中的生命周期</h6>
        <p ref='p'>{this.state.name}</p>
        <button onClick={()=>{
          this.setState({name:'李雷'})
        }}>cahnge</button>
      </div>
    )
  }
}
export default Running