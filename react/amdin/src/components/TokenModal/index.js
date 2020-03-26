import React, { Component, Fragment } from 'react';
import { Card } from 'antd';

class TokenModal extends Component {
  state = { show:true }
  render() { 
    let {show} = this.state
    return ( 
      <Fragment>
        {!show||
        <div style={{
          position:"fixed",
          top:0,
          left:0,
          right:0,
          bottom:0,
          background:'rgba(0,0,0,.3)',
          "z-index":10
        }}>
         <Card  title='权限不足'></Card> 
        </div>
        }
      </Fragment>
     );
  }
}
 
export default TokenModal;