import React, { Component } from 'react';
import goodsApi from '../.../../../../api/goods'
class GoodsKindList
 extends Component {
  state = {  }
  async componentDidMount(){
    // 请求商品的类别列表
    let result= await goodsApi.kindlist()
    console.log(result)
  }
  render() { 
    return (<div>
      <h1>商品的类别列表</h1>
    </div>  );
  }
}
 
export default GoodsKindList;