import React, { Component } from 'react';
import style from  './index.module.less'
import uploadApi from '../../../api/upload'
import goodsApi from '../../../api/goods'
import config from '../../../config'
import {Card, message} from 'antd';
class GoodsUpdate extends Component {
  state = {
    "name":"默认名字",
    "desc":'超好吃,是真的超好吃不是假的超好吃',
    "path":'heheheda',
    "link":"http://www.baidu.com",
    "stock":0,
    "putaway":0,
    "price":0,
    "unit":"件",
    "kind":'',
    "types":[] 
  }
  async componentDidMount(){
    // 获取id
    let {id} =  this.props.match.params
    //  获取的是类别列表
    let result= await goodsApi.kindlist() 
    //  通过id 获取修改信息
    let {code,info} = await goodsApi.findOne(id) 
    console.log(result.list,info[0])
    this.setState({types:result.list,...info[0]})
    
  }
  // 添加商品
  submit=async()=>{
    let {id} =  this.props.match.params
   if (!this.state.path){return message.info('请先上传图片')}
  //  调用修改的接口
   let {code,msg}  = await goodsApi.update(id,this.state)
   if(code){ return message.error(msg)}
   console.log(this)
   this.props.history.replace('/admin/goodsInfo')

  }
  // 图片上传
  upload= async ()=>{
    // 1. 获取图片里的内容
    let  file = this.refs.img.files[0]
    if(!file){ return message.error('请先选择一张图片')}
    // 图片的验证
    let {size,type} = file 
    console.log(type)
    let types = ['jpg',"jpeg",'gif','png']
    if(size>1000000){ return message.warning('图片超过1m')}
    if(types.indexOf(type.split('/')[1])===-1){ return message.warning('只允许jpg.jpeg,gif,png四种类型')}
    // 将图片变成base64 
    // 创建文件读取对象 
     let reader = new FileReader()
    //  文件转化为base64结束触发
     reader.onload=()=>{
       console.log('转化完毕')
       console.log(reader.result)
       this.setState({path:reader.result})
     }
    // 读取一个文件
     reader.readAsDataURL(file)
  }
  render() { 
    let {name,desc,path,link,stock,putaway,price,unit,types,kind} = this.state
    // 判断path是不是base64 
    let basePath = path
    if(basePath.indexOf('base64')=== -1){ basePath = config.serverIp+path}
    return ( 
      <div className={style.box}>
         <Card title='商品添加'>
            名称: <input type='text' value={name} onChange={(e)=>{
              this.setState({name:e.target.value})
            }}/><br/>
            描述: <input type='text' value={desc} onChange={(e)=>{
              this.setState({desc:e.target.value})
            }}/><br/>
            链接: <input type='text' value={link} onChange={(e)=>{
              this.setState({link:e.target.value})
            }}/><br/>
            库存: <input type='number' value={stock} onChange={(e)=>{
              this.setState({stock:e.target.value})
            }}/><br/>
            发布状态: 
            <select value={putaway} onChange={(e)=>{
              this.setState({putaway:Number(e.target.value)})
            }}>
              <option value={-1}>下架</option>
              <option value={0}>未上架</option>
              <option value={1}>上架</option>
            </select>
            
            <br/>
            价格: <input type='number' value={price} onChange={(e)=>{
              this.setState({price:e.target.value})
            }}/><br/>
            单位: <input type='text' value={unit} onChange={(e)=>{
              this.setState({unit:e.target.value})
            }}/><br/>
            {/* 渲染类别 */}
            类别:
            <select value={kind} onChange={(e)=>{
                this.setState({kind:e.target.value})
            }}>
              {types.map((item,index)=>{
                return( <option value={item._id} key={item._id}>{item.kindName}</option>)
              })}
            </select>
            {/* 缩略图 */}
            缩略图:
            <input type="file" ref='img'/> <button onClick={this.upload}>上传图片</button>
           
            <img width='120' height='80' src={basePath} alt=""/>
            <button onClick={this.submit}>修改</button>
         </Card>
      </div>
     );
  }
}
 
export default GoodsUpdate;
/*
商品修改
1.根据商品的id 获取商品相关的信息
2.显示默认信息
3.用户进行修改
4.调用修改接口
4.添加成功后 可以在页面不动 也可以跳转回列表页
*/ 