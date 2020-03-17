import React, { Component } from 'react';
import ActionCreator from './store/actionCreator'
import store from './store/store'
class Son2 extends Component {
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }
  render() {  
    let {name,age} = store.getState() 

    return (  
      <div>
        <h3>子组件2</h3>
        name:{name}
        <br/>
        age:{age}
        <button onClick={()=>{
          ActionCreator.changeName('隔壁王叔叔')
        }}>改名</button>
      </div>
    );
  }
}
 
export default Son2;