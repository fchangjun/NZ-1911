import React, { Component, Fragment } from "react";

class Route extends Component{
  constructor(){
    super()
    this.state={
      hashPath:'/recommend'
    }
  }
  // 监听地址栏的改变
  cb=()=>{
    let hash = window.location.hash.split('#')[1]
    console.log('hash改变',hash)
    this.setState({hashPath:hash})
  }
  componentDidMount(){
    window.addEventListener('hashchange',this.cb)
  }
  test(){
    return(
      <h3>你好</h3>
    )
  }
  render(){
    console.log(this)
    let {path,component} = this.props
    return(
      <Fragment>
        {this.state.hashPath===path&&component()}
      </Fragment>
    )
  }
  componentWillUnmount(){
    window.removeEventListener('hashchange',this.cb)
  }
}

export default Route