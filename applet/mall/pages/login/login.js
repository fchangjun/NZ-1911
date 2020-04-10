const userApi = require('../../api/userApi')
Page({
  inputUser(e){
    let  {value} = e.detail 
    this.data.userName = value
  },
  inputPass(e){
    let  {value} = e.detail 
    this.data.passWord = value
  },
  goReg(){
    wx.redirectTo({
      url: '/pages/reg/reg',
    })
  },
  async login(){
    let {passWord,userName} = this.data 
    let {code,token,uid} = await userApi.normalLogin(userName,passWord)
    wx.setStorageSync('userInfo',{token,uid,userName})
    wx.switchTab({
      url: '/pages/my/my',
    })
  }
})

