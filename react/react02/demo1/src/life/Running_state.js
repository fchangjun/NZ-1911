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
  shouldComponentUpdate(props,state){
    // 数据变了我是不是应该更新界面
    console.log('数据变了')
    // console.log('参数',props,state)
    // console.log('this',this.props,this.state)
    // if(this.state.name === state.name){
    //   return false
    // }else{
    //   return true 
    // }
    /*
    该生命周期控制 数据修改是否要更新界面 通过该生命周期减少无关的页面更新
    返回 true 更新 
    返回 false 不更新
    参数 props 和state 将要更新的数据
    this里的props和state 指的是还没更新的数据
    
    */ 
   return  true 
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
  componentWillUpdate(){
    /*
    页面更新之前触发
    数据 dom 元素都是更新之前的
    也是在render前
    该生命周期也将要被废弃
    */ 
    console.log('更新之前')
    // console.log(this)
    // console.log(this.state)
    // console.log(this.refs.p)
    // console.log(this.refs.p.innerText)
  }
  componentDidUpdate(){
    /*
     在跟新操作结束之后触发
     数据和dom 都是修改之后的
     小心在这里做数据跟新的操作
    */ 
    console.log('跟新结束')
    console.log(this)
    console.log(this.state)
    console.log(this.refs.p)
    console.log(this.refs.p.innerText)
  }
}
export default Running