import React, { Component,Fragment } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import style from './index.module.less'

let userdata =[
  {name:'个人中心',icon:'user',divider:false},
  {name:'个人设置',icon:'setting',divider:true},
  {name:'退出登录',icon:'logout',divider:false},
]
let langData =[
  {name:'简体中文',icon:'user',divider:false},
  {name:'繁体中文',icon:'setting',divider:true},
  {name:'英语',icon:'logout',divider:false},
]
function createMenu(data){
 return (
   <Menu>
     {data.map((item,index)=>{
       return(         
          <Menu.Item key={index}>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            <Icon type={item.icon} />{item.name}
            </a>
            <Menu.Divider></Menu.Divider>
          </Menu.Item>
       )
     })}
   </Menu>
 )
}
class HeaderNav extends Component {
  state = {  }
  render() { 
    return ( 
      <div className={style.box}>
        这里是头部导航
        <Dropdown overlay={createMenu(userdata)}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me <Icon type="down" />
          </a>
        </Dropdown>
        <Dropdown overlay={createMenu(langData)}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            语言 <Icon type="down" />
          </a>
        </Dropdown>
      </div>
     );
  }
}
 
export default HeaderNav;