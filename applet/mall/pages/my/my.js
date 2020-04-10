const {userInfo} = getApp()
Page({
  data:{
     ...userInfo
  },
  onLoad(){
   let {token,uid} = wx.getStorageSync('userInfo')
   this.setData({token,uid})
  },
  // 去登录
  goLogin(){
    wx.redirectTo({
      url: '/pages/login/login',
    })
  },
  goWxLogin(){
    wx.redirectTo({
      url: '/pages/wxlogin/wxlogin',
    })
  },
  // 跳转到订单列表 
  goOrderList(e){
    let {type} =e.currentTarget.dataset
    wx.reLaunch({
      url: '/pages/orderlist/orderlist?type='+type,
    })
  }
})