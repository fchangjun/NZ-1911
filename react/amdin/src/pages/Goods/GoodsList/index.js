import React, { Component } from 'react';
import {Pagination,Card,message,Table,Tag,Button,Popconfirm} from 'antd'
import goodsApi from '../../../api/goods'
import style from './index.module.less'
let rootPath = 'http://47.95.207.1:3000'
class Goods extends Component {
  state = { 
    page:1,//页码数
    pageSize:2,//每页显示的条数
    list:[], //列表数据
    count:0, //总数量
    columns:[
      {title: '_id',dataIndex: '_id',key: '_id',width:120,fixed:'left'},
      {title: '名称',dataIndex: 'name',key: 'name',width:120},
      {title: '库存',dataIndex: 'stock',key: 'stock',width:80},
      {title: '价格',dataIndex: 'price',key: 'price',width:120},
      {title: '缩略图',dataIndex: 'path',key: 'path',render(path){
        return(<img width ='150' height='80'src={rootPath+path}/>)
      },width:150},
      {title: '描述',dataIndex: 'desc',key: 'desc',width:200},
      {title: '单位',dataIndex: 'unit',key: 'unit',width:80},
      {title: '状态',dataIndex: 'putaway',key: 'putaway',render(putaway){
        console.log(putaway)
        let obj={'-1':{color:'red',msg:'已下架'},'0':{color:'yellow',msg:'未上架'},'1':{color:'green',msg:'已上架'}}
        return(<Tag color={obj[putaway].color}>{obj[putaway].msg}</Tag>)  
      },width:120},
      {title: '操作',key: 'action',width:120,fixed:'right',render:(recode)=>{
        return(
          <div>
            <Popconfirm title='你确定要删除该商品嘛?'
            onConfirm={()=>{this.delGodds(recode._id)}}
            >
              <Button type='danger' size='small'>删除</Button>
            </Popconfirm>
            <Popconfirm title='你确定要修改该商品的状态嘛?'
            onConfirm={()=>{this.putAwayGodds(recode._id,recode.putaway)}}
            >
              <Button type='warn' size='small'>上架</Button>
            </Popconfirm>
            <Button type='primary' size='small'>修改</Button>
          </div>
        )
      }}
  ]
   }
   componentDidMount(){
     this.getListData()
   }
  // 上架商品
  putAwayGodds = async (_id,putaway)=>{
    if(putaway ===0||putaway === -1){
      putaway = 1
    }else{
      putaway = -1
    }
    let {code,msg} = await goodsApi.putaway(_id,putaway)
    if(code){ return message.error(msg)}
    this.getListData()
  }
  // 删除商品
  delGodds= async(_id)=>{
    let {code,msg} = await goodsApi.del(_id)
    if(code){ return message.error(msg)}
    this.getListData()
  }
  // 获取商品数据
  getListData= async ()=>{
    let {page,pageSize}  = this.state
    let {code,msg,list,count} = await goodsApi.list(page,pageSize)
    if(code !==0){ return message.error(msg)}
    this.setState({list,count})
  }
  render() { 
    let {list,columns,count,pageSize,page} = this.state
    return ( 
      <div className={style.box}>

        <Card title='商品列表' className={style.card}>
           <Button type='primary' onClick={()=>{
             console.log(this)
             this.props.history.push('/admin/goodsadd')
           }}>商品添加</Button>
            {/* 表格内容 */}
            <Table 
              scroll={ {y:300,x:840} }
              pagination={false}
              columns={columns} 
              dataSource={list} 
              rowKey='_id'>
            </Table>
            {/* 分页器 */}
            <Pagination  current={page}total={count} showQuickJumper pageSize={pageSize}
            onChange={(page,pageSize)=>{
              //只要页码数发生改变就会触发          
              this.setState({page},()=>{
                this.getListData()
              })   
            }}
            />
        </Card>
      </div>
     );
  }
}
 
export default Goods;