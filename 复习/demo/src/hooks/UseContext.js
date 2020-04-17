import React, { Component } from 'react';
import {ColorContext} from './ColorContext'
import { useContext } from 'react';
// 类组件
// class UseContextDemo extends Component {
//   static contextType = ColorContext
//   state = {  }
//   render() { 
//     return ( 
//       <div>
//         <h1>UseContextDemo</h1>
//         {this.context}
//       </div>
//      );
//   }
// }
function UseContextDemo(){
  let value = useContext(ColorContext)
  return(
    <div>
      <h1>UseContextDemo</h1>
      {value}
    </div>
  )
}

export default UseContextDemo;