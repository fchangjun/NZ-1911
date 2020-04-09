const shopCartCtr = require('../shopcart/shopcartCtr')
const {config} = getApp()
Page({
  data:{
    imgServer:config.imgServer,
    list:[],
    price:0,
    count:0,
    address:null,
  },
  onLoad(){
    let address = wx.getStorageSync('address')
    let list = shopCartCtr.getSelectList() 
    console.log(list)
    let {price,count} = shopCartCtr.getSelCountPrice()
    this.setData({address,list,price,count})
  },
  // 选择地址
  selAddress(){
   wx.chooseAddress({
     complete: (res) => {
    
        // 将地址信息保存到localstore里 
        wx.setStorageSync('address', res)
     },
   })
  }
})