import React, { Component ,Fragment} from 'react';
import store from './store/store'
export default (TmpComponent)=>{

  class Connect extends Component {
    componentDidMount(){
      store.subscribe(()=>{

        this.setState({})
      })
    }
    render() { 
      let {name,age} = store.getState()
      return ( 
        <Fragment>
          <TmpComponent name={name} age={age}></TmpComponent>
        </Fragment>
       );
    }
  }
   
  return Connect
}