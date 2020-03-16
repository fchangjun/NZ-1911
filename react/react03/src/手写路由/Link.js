import React, { Component, Fragment } from "react";

class Link extends Component{
  render(){
    console.log(this)
    return(
      <Fragment>
        <span onClick={()=>{
          window.location.hash=this.props.to
        }}>{this.props.children}</span>
      </Fragment>
    )
  }
}

export default Link