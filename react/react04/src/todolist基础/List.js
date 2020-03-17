import React, { Component, Fragment } from 'react';
import ActionCreatore from "./store/actionCreator"
import store from './store/store'
import  './index.css'
class Box extends Component {
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }
  render() { 
    console.log(store.getState())
    let {list} = store.getState()
    return ( 
      <Fragment>
        <ul>
         {list.map((item,index)=>{
           return (
             <li className={item.finish?"skyblue":'yellow'} key={index}>
               {item.msg}
                <button onClick={()=>{
                  ActionCreatore.dellist(index)
                }}>删除</button>
             </li>
           )
         })}
        </ul>
      </Fragment>
     );
  }
}
 
export default Box;