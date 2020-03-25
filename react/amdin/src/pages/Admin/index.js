import React, { Component } from 'react';
import CustomNav from '../../components/CustomNav'
import { Layout } from 'antd';
import style from './index.module.less'
import goodsApi from '../../api/goods'
const { Header, Content, Footer, Sider } = Layout;
class Admin extends Component {
  async componentDidMount(){
    // 请求商品的类别列表
    let result= await goodsApi.kindlist()
    console.log(result)
  }
  state = {  }
  render() { 
    return ( 
      <Layout className={style.wrapper}>
        {/* 侧边栏 */}
      <Sider>
        <div className="logo" />
        <CustomNav></CustomNav>
      </Sider>
     
      <Layout >
        <Header style={ {background:'red'} }>这里是头部</Header>
        <Content >
          {this.props.children}
        </Content>
        <Footer >Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
     );
  }
}
 
export default Admin;