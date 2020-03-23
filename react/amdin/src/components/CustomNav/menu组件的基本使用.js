import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Menu } from 'antd';
const { SubMenu } = Menu;

function handleClick(e) {
  // 点击获取跳转路径通过编程式导航实现跳转
  let {path} = e.item.props 
  this.props.history.replace(path)

}
class CustomNav extends Component {
  render(){
    return(
      <Menu onClick={handleClick.bind(this)} style={{ width: 200 }} mode="vertical" theme='dark'>
      <Menu.Item key="1">首页</Menu.Item>
      <SubMenu
        key="sub1"
        title='管理员'>
          <Menu.Item key="1">管理员添加</Menu.Item>
          <Menu.Item key="2">管理员修改</Menu.Item>
          <Menu.Item key="3">管理员列表</Menu.Item>
          {/* 多级嵌套 */}
          <SubMenu key='sub2' title='多级'>
            <Menu.Item key="3">三级列表1</Menu.Item>
            <Menu.Item key="4">三级列表2</Menu.Item>
            <SubMenu key = 'sub3' title='4级'>
              <Menu.Item key="3">四级列表1</Menu.Item>
              <Menu.Item key="4">四级列表2</Menu.Item>
            </SubMenu>
          </SubMenu>
      </SubMenu>
      <Menu.Item key="3" path='/admin/user'>用户管理</Menu.Item>
      <Menu.Item key="4" path='/admin/goods'>商品管理</Menu.Item>
      <Menu.Item key="5">设置</Menu.Item>
    </Menu>
    )
  }
}
 
export default withRouter(CustomNav);