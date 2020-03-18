import React ,{Component}from 'react';
class App extends Component {
  constructor(){
    super()
    this.state={
      num:1
    }
  }
  componentDidMount(){
   console.log(this.state.num) //1
   this.setState({num:2})
   console.log(this.state.num)//1
   setTimeout(()=>{
      this.setState({num:3})
      console.log(this.state.num)
      this.setState({num:4})
      console.log(this.state.num)
   },0)
   console.log(this.state.num) //1
  }
  render() { 
    return ( 
      <div>
        {this.state.num}
      </div>
     );
  }
}
/*
setState 是个异步
但是如果setState放到了异步中 变成同步了
*/ 
 
export default App;


