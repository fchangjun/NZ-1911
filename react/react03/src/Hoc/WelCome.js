import React, { Component } from 'react';
import  Hoc from  './hoc'
class WelCome extends Component {

  render() { 
    return ( 
      <div className='welcome'>
        欢迎:{this.props.name}
      </div>
     );
  }
}
 
export default Hoc(WelCome);