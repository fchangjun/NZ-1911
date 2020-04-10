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
  async reg(){
    let {passWord,userName} = this.data 
    let {err} = await userApi.normalReg(userName,passWord)
    if(err === 0 ){
      wx.showToast({
        title: '注册成功跳转登录界面',
        icon: 'success',
        duration: 2000
      })
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }
  }
})