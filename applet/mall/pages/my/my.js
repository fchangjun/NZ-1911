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
  }
})