const axios = require('./utils/axios')
const config = require('./config/index')
App({
  onLaunch(){
    // console.log(this)
    // wx.setStorageSync('userInfo', {uid:'123123',token:"213123213"})
    let userInfo = wx.getStorageSync('userInfo')||{}
    this.userInfo = userInfo
  },

  axios,
  config
})