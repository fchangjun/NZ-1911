import React, { Component } from 'react';
import style from  './index.module.less'
import goodsApi from '@api/goods'
import {Card, message} from 'antd';
import PicturesWall from '@components/PicturesWall'
class GoodsAdd extends Component {
  state = {
    "name":"默认名字",
    "desc":'超好吃,是真的超好吃不是假的超好吃',
    "goodsImgPath":[],
    "descImgPath":[],
    "link":"http://www.baidu.com",
    "stock":0,
    "putaway":0,
    "price":0,
    "unit":"件",
    "kind":'请选择类别',
    "types":[] 
  }
  async componentDidMount(){
    let {code ,list}= await goodsApi.kindlist() 
    this.setState({types:list})
    
  }
  // 添加商品
  submit=async()=>{

  let {goodsImgPath,descImgPath} = this.state 
   if (!goodsImgPath.length||!descImgPath.length){return message.info('请先上传图片')}
   console.log(this.state)
   let {code,msg}  = await goodsApi.add(this.state)
   if(code){ return message.error(msg)}
  //  this.props.history.replace('/admin/goodsInfo')

  }
  //修改展示轮播 
  changGoodsImgPath(paths){
   this.setState({goodsImgPath:paths})
  }
  //修改描述图片
  changDescImgPath(paths){
    this.setState({descImgPath:paths})
   }
  render() { 
    let {name,desc,path,link,stock,putaway,price,unit,types,kind} = this.state
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
            <br/>
            商品展示轮播:
            <PicturesWall okCb={this.changGoodsImgPath.bind(this)}></PicturesWall>
            <br/>
            商品详情:
            <PicturesWall okCb={this.changDescImgPath.bind(this)}></PicturesWall>
            <br/>
            <button onClick={this.submit}>添加</button>
         </Card>
      </div>
     );
  }
}
 
export default GoodsAdd;
/*
商品添加
1.用户输入信息
2.获取用户输入的信息
3.调用添加接口
4.添加成功后 可以在页面不动 也可以跳转回列表页
*/ 