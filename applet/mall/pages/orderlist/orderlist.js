const orderApi = require('../../api/orderApi')
const {config} = getApp()
Page({
  data:{
    imgServer:config.imgServer,
    active:0,
    list:[]
  },
  onLoad(option){
    let {type} =option 
    console.log('订单列表页的类型',type)
    let active = Number(type)+2 
    console.log(active)
    this.setData({active})
    // 获取数据
    this.getList(type)
  },
  onChange(e){
    let index = e.detail.index 
    this.getList(index-2)
  },
  // 根据状态获取 订单信息
 async getList(state){
    let {list} = await orderApi.getUserOrderList(state) 
    this.setData({list})
  }
})