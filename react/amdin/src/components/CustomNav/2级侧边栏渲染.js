import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Menu } from 'antd';
const { SubMenu } = Menu;

let menuList=[
  {
    key:'1',
    title:"首页",
    path:'/admin/home'
  },
  {
    key:'2',
    title:'管理员',
    children:[
      {
        key:'2-1',
        title:'管理员添加',
        path:'/admin/admin/add'
      },
      {
        key:'2-2',
        title:'管理员修改',
        path:'/admin/admin/update',
        children:[
          {
            key:'2-2-1',
            title:'管理员修改1',
            path:'/admin/admin/update1'
          },
          {
            key:'2-2-2',
            title:'管理员修改2',
            path:'/admin/admin/update1'
          }
        ]
      }
    ]
  },
  {
    key:'9',
    title:"设置",
    path:'/admin/set'
  }
]
function handleClick(e) {
  // 点击获取跳转路径通过编程式导航实现跳转
  let {path} = e.item.props 
  this.props.history.replace(path)

}
class CustomNav extends Component {
  renderItem(data){
    return data.map((item,index)=>{
      return(
        <Menu.Item key={item.key} path={item.path}>{item.title}</Menu.Item>
      )
    })
  }
  render(){
    return(
    <Menu onClick={handleClick.bind(this)} style={{ width: 200 }} mode="vertical" theme='dark'>
      {/* <Menu.Item key="1">首页</Menu.Item>
      <SubMenu key="sub1" title='管理员'>
          <Menu.Item key="1">管理员添加</Menu.Item>
      </SubMenu> */}
      {menuList.map((item,index)=>{
        if(item.children){
          // 这一项是多级导航
          return(
            <SubMenu key={item.key} title={item.title}>
              {this.renderItem(item.children)}
            </SubMenu>
          )
        }else{
          // 一级导航
          return(
            <Menu.Item key={item.key} path={item.path}>{item.title}</Menu.Item>
          )
        }
      })}
    </Menu>
    )
  }
}
 
export default withRouter(CustomNav);