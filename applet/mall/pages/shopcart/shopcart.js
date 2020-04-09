import  Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'
const  shopCartCtrl = require('./shopcartCtr')
const {config} = getApp()
console.log(Dialog)
Page({
  data:{
    price:0,
    count:0,
    imgServer:config.imgServer,
    list:[],
    selectAllState:false
  },
  onLoad(){
    this.getData()
  },
  // 获取购物车数据
  getData(){
    let list = shopCartCtrl.getData()
    let  {price,count}= shopCartCtrl.getSelCountPrice()
    this.setData({list,price,count})
  },
  // 删除商品的回调
  delete(e){
    // instance 滑块组件的实例
    let {instance} = e.detail
    console.log('删掉我了',e)
    Dialog.confirm({
      title: '警告',
      message: '你确定要删除嘛'
    }).then(() => {
      // on close
      instance.close()
    });
  },
  // 单选
  onChange(e){
    let {id} = e.currentTarget.dataset 
    console.log(e)
    shopCartCtrl.selectOne(id)
    this.getData()
  },
  // 全选
  onChangeAll(){
    let selectAllState = !this.data.selectAllState 
    shopCartCtrl.selectAll(selectAllState)
    this.getData()
    this.setData({selectAllState})
  }
})