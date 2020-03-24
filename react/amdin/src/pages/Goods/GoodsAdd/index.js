import React, { Component } from 'react';
import style from  './index.module.less'
import {Card} from 'antd';
class GoodsAdd extends Component {
  state = {
    "name":"默认名字",
    "desc":'超好吃,是真的超好吃不是假的超好吃',
    "path":"sdfsfsdffs",
    "link":"http://www.baidu.com",
    "stock":0,
    "putaway":0,
    "price":0,
    "unit":"件" 
  }
  render() { 
    let {name,desc,path,link,stock,putaway,price,unit} = this.state
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

            <button onClick={()=>{
              console.log(this.state)
            }}>添加</button>
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