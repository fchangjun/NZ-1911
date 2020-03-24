import React, { Component } from 'react';
import {Card ,Table,Button,Modal,notification,Spin,Popconfirm,message} from 'antd'
import style from './index.module.less'
import adminapi from '../../api/admin.js' 
// 声明表头的数据格式
// let  columns = ;
class Admins extends Component {
  state = { 
    dataSource:[],
    visible:false,
    spinning:false,
    columns:[
      {
        title: 'id',   //显示
        dataIndex: '_id',//数据索引字段
        key: '_id', //key值
      },
      {
        title: '账号',
        dataIndex: 'userName',
        key: 'userName',
      },
      {
        title:'操作',
        key:'action',
        // 定义渲染的列
        // 参数如果没写dataIndex 整条数据  写了dataIndex 那就是关联数据
        render:(record)=>{
          return(
            <div>
               <Popconfirm
                title="你确定要删除这个用户吗?"
                onConfirm={()=>{
                  this.del(record._id)
                }}
                onCancel={()=>{
                  message.error('取消删除');
                }}
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
            </div>
          )
        },
      }
    ]
   }
   del=async (_id)=>{
     // 获取id 掉接口 刷新界面
     console.log('删除',_id)
     let result =await adminapi.del(_id)
     // 根据结果进行
     if(result.code !==0){ return false }
     this.refreshList() 
   }
   handleOk=async ()=>{
    // 先获取输入内
    // 做添加接口
    // 关闭模态框
    // 刷新界面
    let userName = this.refs.us.value
    let passWord = this.refs.ps.value
    let result = await adminapi.add({userName,passWord})
    if (result.code!==0){ return notification.error({description:'管理员添加失败，请详细检查传输',message:'错误',duration:1.5})}
    notification.success({description:'管理员添ok，模态框即将关闭',message:'成功',duration:1.5})
    this.setState({visible:false})
    this.refreshList()
   }
   handleCancel=()=>{
    this.setState({visible:false})
   }
   //刷新列表数据
   refreshList=async ()=>{
    this.setState({spinning:true})
    let result = await adminapi.list()
    console.log(result)
    this.setState({dataSource:result.adminList,spinning:false})
   }  
  componentDidMount(){
    // 请求数据渲染界面
   this.refreshList()
  }
  render() { 
    let {dataSource,visible,spinning,columns} =this.state
    return (
      <div className={style.admins}>
         <Card title='管理员列表'>
            {/* dataSource 表格内容数据
                columns    表头数据
                rowKey     设置为唯一索引字段
            */}
            <Button type="primary" icon="plus" onClick={()=>{
              this.setState({visible:true})
            }}>添加</Button>
            <Spin spinning={spinning}>
              <Table dataSource={dataSource} columns={columns} rowKey='_id'></Table>
            </Spin>
         </Card>
         {/* 添加的模态框 */}
         <Modal
          title="管理员添加"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          userName:<input type="text" ref='us'/><br/>
          passWord:<input type="text" ref='ps'/><br/>
        </Modal>
      </div>
     );
  }
}
 
export default Admins;