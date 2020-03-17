import React, { Component } from 'react';
import Hoc from './Hoc'
class Rank extends Component {

  render() { 
    return (  
      <div>
        <h6>这里是屏排汗</h6>
      
      </div>
    );
  }
}
 
export default Hoc(Rank);