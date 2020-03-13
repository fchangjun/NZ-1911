import React ,{ Component } from "react";
import  './index.css'
// demo 组件

class Demo extends Component{
  constructor(){
    super()
    this.state={
      color:'rgba(255,0,0,0.5)'
    }
  }
  componentDidMount(){
    window.addEventListener('scroll',this.scroll)
  }
  scroll=()=>{
    console.log('滚滚滚')
    let r =Math.random()*255
    let g =Math.random()*255
    let b =Math.random()*255
    let a =Math.random()
    this.setState({color:`rgba(${r},${g},${b},${a})`})
  }
  componentWillUnmount(){
    console.log('组件销毁')
    window.removeEventListener('scroll',this.scroll)
  }
  render(){
    return (
      <div className='demo' style={ {background:this.state.color} }>

      </div>
    )
  }
}

class UnMount extends Component{
  constructor(){
    super()
    this.state={
      show:true
    }
  }
  render(){
    return(
      <div>
        <h4>卸载案例</h4>
         <div className='test'>
          <button onClick={()=>{
            this.setState({show:!this.state.show})
          }}>change</button>
          {!this.state.show||<Demo></Demo>}
        </div>
        <div className='fixed'>

        </div>
      </div>
    )
  }
}
/*
鼠标滚轮 能控制div 随机改变颜色
*/
export default UnMount