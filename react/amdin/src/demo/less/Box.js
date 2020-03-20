import React from 'react';
// import './index.less'
// import './index.css'
import Style from './index.module.less'
console.log(Style)
function Box() {
  return (
    <div className={Style.hehe}>
     <h1 className={Style.test}>lessDemo111</h1> 
     <div id={Style.div1}>

     </div>
    </div>
  );
}

export default Box;
