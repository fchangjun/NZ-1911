import React from 'react'
// 通过ref来获取表单元素的方式叫非受控组件
class App  extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <input type="text" placeholder='user' ref='user'/>
        <input type="text" placeholder='pass' ref='pass'/>
        <button onClick ={()=>{
           let user = this.refs.user.value 
           let pass = this.refs.pass.value 
           console.log(user,pass)
        }}>login</button>
      </div>
    )
  }
}
export default App