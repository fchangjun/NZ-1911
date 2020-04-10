const userApi = require('../../api/userApi')
Page({
  login(){
    wx.login({
      complete: async (res) => {
        let {code} = res
        console.log(code)
        let result = await userApi.wxLoign(code)
        console.log(result)
      },
    })
  }
})