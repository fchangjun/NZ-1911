import React, { Component, Fragment } from 'react';
import Hoc from './Hoc'
class Recommend extends Component {
  //  constructor(){
  //    super()
  //    this.state={
  //      isLogin:false
  //    }
  //  }
  //  componentDidMount(){
  //   let isLogin = localStorage.getItem('isLogin')
  //   this.setState({isLogin})  
  //  }
  render() {
    // let {isLogin} = this.state
    return (  
      // <Fragment>
      //   {isLogin!=='null'?
        <div className='recommend'>
          <h6>这里是推荐</h6>
        </div>
      //   :
      //   <Modal></Modal>
      //   }
      // </Fragment>
     
    );
  }
}
 
export default Hoc(Recommend);