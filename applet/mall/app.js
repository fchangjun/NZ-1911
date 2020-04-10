const axios = require('./utils/axios')
const config = require('./config/index')
App({
  onLaunch(){
    // console.log(this)
    // wx.setStorageSync('userInfo', {uid:'123123',token:"213123213"})
    let userInfo = wx.getStorageSync('userInfo')||{}
    this.userInfo = userInfo
    // 验证小程序的登录状态
    wx.checkSession({
      success(){
        console.log("登录状态有效")
      },
      fail(){
        console.log('登录太无效')
        // 引导用户去登录 
        wx.removeStorageSync('userInfo')
        wx.reLaunch({
          url: '/pages/my/my',
        })
      }
    })
  },

  axios,
  config
})