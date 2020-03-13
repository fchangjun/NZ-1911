import React from 'react'
// 受控组件指的是 表单的value 和 state里的数据进行关联 
// value 被state控制
// 修改表单元素通过修改state实现
class App  extends React.Component{
  constructor(){
    super()
    this.state={
      user:'123',
      pass:'456'
    }
  }
  render(){
    let {user,pass} = this.state
    return(
      <div>
        <input type="text"  value={user} onChange={(e)=>{
          let value = e.target.value 
          this.setState({user:value})
        }}/>
        <input type="text"   value={pass} onChange={(e)=>{
          let value = e.target.value
          this.setState({pass:value})
        }}/>
        <button onClick ={()=>{
            console.log(user,pass)
        }}>login</button>
      </div>
    )
  }
}
export default App