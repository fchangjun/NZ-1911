import React from  'react' 
// 过期版本的创建组件方法
// let App = React.createClass({
//   render() {
//     return(
//       <div>
//         这里是app组件
//       </div>
//     )
//   }
// })
class App extends React.Component{
  constructor(){
    super() //因为是组件是继承而来 所以要执行一下父类的构造函数 
    // 在构造函数里初始化state
    this.state = {
      name:'韩梅梅'
    }
  }
  render(){
    console.log(this)
    return(
      <div>
        这里16版本的组件创建方式 
        {this.state.name}
        <button onClick={()=>{
          this.setState({name:'李雷雷'})
        }}>change</button>
      </div>
    )
  }
}
export default App