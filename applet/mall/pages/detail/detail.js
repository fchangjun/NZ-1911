const goodsApi = require('../../api/goodsApi')
const {config} = getApp()
Page({
  data:{
    showModal:false, //控制模态框的显示隐藏
    info:{},
    imgServer:config.imgServer
  },
  async onLoad(option){
    console.log(option)
    let productId='5e8973abfba9d9788a2eb420'
    // let productId=option.productId
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
  }
})
/*
根据商品id 获取商品的数据
根据数据渲染界面
*/ 