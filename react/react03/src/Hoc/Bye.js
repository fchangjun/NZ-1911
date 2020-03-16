import React, { Component } from 'react';
import Hoc from  './hoc'
class Bye extends Component {
  // constructor(){
  //   super()
  //   this.state={
  //     name:'数据加载ing'
  //   }
  // }
  // componentDidMount(){
  //   setTimeout(()=>{
  //     let name= localStorage.getItem('name')
  //     this.setState({name})
  //   },1000)
  // }
  render() { 
    return ( 
      <div className='byebye'>
        再见:{this.props.name}
      </div>
     );
  }
}

export default Hoc(Bye);