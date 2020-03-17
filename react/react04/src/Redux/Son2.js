import React, { Component } from 'react';
import ActionCreator from './store/actionCreator'
import connect from './connect'
class Son2 extends Component {

  render() {  
    let {name,age} = this.props

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
 
export default connect(Son2);