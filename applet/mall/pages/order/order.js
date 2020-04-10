const shopCartCtr = require('../shopcart/shopcartCtr')
const  orderApi  = require('../../api/orderApi')
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
        this.setData({address:res})
     },
   })
  },
  // 支付逻辑
  goPay(){
    wx.showModal({
      title:"请支付",
      content:"测试功能模拟支付",
      cancelColor: 'cancelColor',
      success(res){
        if(res.confirm){
          // 确认支付跳转到我的页面 
          wx.reLaunch({
            url: '/pages/my/my',
          })
        }
      }
    })
  },
  // 下单
  async sendOrder(){
    // 判断用户是否已经登录 
    let {token} = wx.getStorageSync('userInfo')
    if(token){
      // 提交订单
      let {list,address,price,count} = this.data 
      // 地址的拼接 
      console.log(address)
      let addressDetail  = address.provinceName+address.cityName+address.countyName+address.detailInfo 
      // 拼接订单列表 
      let goodsList =list.map((item)=>{
        return {
          goodsId:item._id,
          count:item.count,
          price:item.price,
          name:item.name,
          image:item.goodsImg
        }
      })
      let obj={"goodsList":goodsList,
      "uid":wx.getStorageSync('userInfo').uid,
      "address":addressDetail,
      "phone":address.telNumber
      }
      let {code }  =await orderApi.createOrder(obj)
      if(code === 0){
        // 去支付
        this.goPay()
        // 将购物车里下单的数据清除
        shopCartCtr.rmOrderGoods()
      }
 
    }else{
      wx.showModal({
        title: '下单失败',
        content: '请先登录',
        success (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/login',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    
    }
  }
})