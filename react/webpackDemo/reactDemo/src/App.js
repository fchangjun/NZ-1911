import React, { Component } from 'react';
import './App.less'
class App extends Component {
  constructor(){
    super()
    this.state={
      num:1
    }
  }
  render() { 
    let {num} = this.state
    return ( 
      <div className ='test'>

        这里是跟组件{num}
        heheda 
        <hr/>
        <button onClick={()=>{
          this.setState({num:9})
        }}>add</button>
      </div>
     );
  }
}
 
export default App;