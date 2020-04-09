const goodsApi = require('../../api/goodsApi')
const {config} = getApp()
const shopCartCtr = require('../shopcart/shopcartCtr')
Page({
  data:{
    pickerValue:0,
    range:[1,2,3,4,5,6,7,8,9],
    showModal:false, //控制模态框的显示隐藏
    info:{},
    imgServer:config.imgServer
  },
  async onLoad(option){
    console.log(option)
    // let productId='5e8973abfba9d9788a2eb420'
    let productId=option.productId
    let {code,msg,result} = await goodsApi.getGoodsInfo(productId)
    this.setData({info:result[0]})
  },
  // 分享当前页面
  sharePage(){
    console.log('12313')
    wx.showShareMenu({
      withShareTicket: true,
      success(res){
        console.log(res)
      },
      fail(err){
      
        console.log(err)
      }
    })
  },
  // 切换显示模态框
  toggleModal(){
    let {showModal} = this.data
    this.setData({showModal:!showModal})
  },
  // 数量切换
  pickerSel(e){
    let value = e.detail.value 
    this.setData({pickerValue:value})
    console.log(e)
  },
  //用来阻断事件的冒泡
  son(){},
  // 添加购物车 
  addShopCart(){
    let {info,pickerValue,range} = this.data
   shopCartCtr.add(info,range[pickerValue])
   this.toggleModal()
  },
  // 跳转到购物车
  goShopCart(){
    wx.switchTab({
      url: '/pages/shopcart/shopcart',
    })
  }
})
/*
根据商品id 获取商品的数据
根据数据渲染界面

bug:
弹出模态框应该禁止底部的滚动
*/ 