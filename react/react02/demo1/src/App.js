import React, { Fragment } from "react"
// import Mount from './life/Mount'
import Running from "./life/Running"
import UnMount from  './life/UnMount'
import { Component } from "react"
function App (){
  return(
    <Fragment>
      <h4>app组件</h4>
      {/* <Running num={3}></Running> */}
      <UnMount></UnMount>
    </Fragment>
  )
}
// class App extends Component{
//   constructor(){
//     super()
//     this.state={ num:3}
//   }
//   render(){
//       return(
//         <Fragment>
//           <h4>app组件</h4>
//           <Running num={this.state.num}></Running>
//           <button onClick={()=>{
//             let num =++this.state.num
//             if(num>=10){
//               num = 10
//             }
//             this.setState({num})
//           }}>add</button>
//         </Fragment>
//       )
//   }
// }
export default App