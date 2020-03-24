import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Menu } from 'antd';
import menuList from './menulist'
// import {
//   HomeOutlined,
//   SettingFilled,
//   UserOutlined,
//   RadarChartOutlined,
// } from '@ant-design/icons';
const { SubMenu } = Menu;

function handleClick(e) {
  // 点击获取跳转路径通过编程式导航实现跳转
  console.log(e)
  let {path} = e.item.props 
  this.props.history.replace(path)
}
class CustomNav extends Component {
  renderIcon(icon){
    // switch (icon) {
    //   case 'home':
    //     return <HomeOutlined/>
    //     break;
    //   case 'set':
    //     return <SettingFilled/>
    //     break;
    //   case 'user':
    //     return <UserOutlined/>
    //     break;
    //   default:
    //     return <RadarChartOutlined />
    //     break;
    // }
  }
  renderItem(data){
    return data.map((item,index)=>{
      if(item.children){
        return(
          <SubMenu key={item.key} title={(()=>{
            return(
              <span>
                {this.renderIcon(item.icon)}
                {item.title}
              </span>
            )
          })()}>
            {/* 如果里面还有2级 将渲染的方法在调用一遍 */}
            {this.renderItem(item.children)}
          </SubMenu>
        )
      }else{
        return(
        <Menu.Item key={item.key} path={item.path}>
          {this.renderIcon(item.icon)}
          {item.title}
        </Menu.Item>
        )
      }
    })
  }
  render(){
    return(
    <Menu onClick={handleClick.bind(this)} style={{ width: 200 }} mode="vertical" theme='dark'>
      {this.renderItem(menuList)}
    </Menu>
    )
  }
}
 
export default withRouter(CustomNav);