import React, { Component } from 'react';
import {Pagination,Card,message,Table,Tag,Button,Popconfirm} from 'antd'
import goodsApi from '../../../api/goods'
import style from './index.module.less'
import XLSX from 'xlsx'
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
      {title: '类别',dataIndex: 'kind',key: 'kind',width:120,render(kind){
        console.log(kind)
      return( <span>{kind?kind.kindName:'暂无类别'}</span>)
      }},
      {title: '缩略图',dataIndex: 'path',key: 'path',render(path){
        // 图片是base64 还是正常的图片路径
        let result = path
        if(path.indexOf('base64')===-1){
           result =rootPath+path
        }
        return(<img width ='150' height='80'src={result}/>)
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
            <Button type='primary' size='small' onClick={()=>{
              // 跳转到修改页面 传递要修改的id 
              this.props.history.replace('/admin/goodsInfoUpdate/'+recode._id)
            }}>修改</Button>
          </div>
        )
      }}
  ]
   }
   componentDidMount(){
     this.getListData()
   }
  //  导出全部商品
  exportAll=async ()=>{
    // 获取表头数据
    let thead = this.state.columns.map((item)=>{ return item.title})
    // 获取要导出的数据
    let {list} = await goodsApi.list(1,10000)
    let data = list.map((item)=>{
      let arr = [] 
      for (const key in item) {
         arr.push(item[key])
      }
      return arr
    })

    // 将数据合并为数组 
    let result = [thead,...data]
    console.log(result)
    //导出
    let  sheet = XLSX.utils.aoa_to_sheet(result) 
    let  wb =XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb,sheet)
    XLSX.writeFile(wb,'商品.xlsx')
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
             this.props.history.push('/admin/goodsInfoAdd')
           }}>商品添加</Button>

          <Button type='primary' onClick={()=>{
             let thead = document.getElementsByTagName('thead')[0]
             let table = document.getElementsByTagName('table')[1]
             table.appendChild(thead)
            //  console.log(table,thead) 
             var wb = XLSX.utils.table_to_book(table, {sheet:"Sheet JS"});
              // 将工作薄导出为excel文件
              XLSX.writeFile(wb,'商品.xlsx');
           }}>DOM导出表格</Button>
          <Button type='primary' onClick={this.exportAll}>导出全部</Button>
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