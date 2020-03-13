import React,{ Component } from "react";

class Running extends Component{
  componentWillReceiveProps(props){
    //监听props 发生改变
    //参数里是更新之后的数据
    //this 里是更新之前的数据
    console.log('props发生改变')
    console.log('this',this.props)
    console.log('参数props',props)

  }
  shouldComponentUpdate(props,state){
    if(props.num === this.props.num){
      return false 
    }else{
      return true
    }

  }
  render(){
    console.log('子组件组件渲染了')
    return(
      <div>
        <h6>运行中的生命周期</h6>
        <p ref='p'>{this.props.num}</p>

      </div>
    )
  }
  
}
export default Running