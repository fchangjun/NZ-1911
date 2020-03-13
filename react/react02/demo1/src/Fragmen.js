import React ,{Fragment,Component}from 'react'
// Fragment可以代替根根元素使用 并且不会在页面上进行渲染
import './index.css'
import Son from './Son'
class App extends Component{
   render(){
     return(
       <Fragment >
         <div className='test'>
          这里是跟组件
          <Son></Son>
         </div>
       </Fragment>
     )
   }
}
export default App  