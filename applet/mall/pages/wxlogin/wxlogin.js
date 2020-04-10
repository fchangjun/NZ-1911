const userApi = require('../../api/userApi')
Page({
  login(e){
    let {userInfo} = e.detail
    console.log(2222)
    if(!userInfo){return false}
    console.log(e)
    wx.login({
      complete: async (res) => {
        let {code} = res
        console.log(code)
        let result = await userApi.wxLoign(code)
        console.log(result)
        // 小程序登录成功之后将数据存入缓存
        let {token,uid,userName} = result
        wx.setStorageSync('userInfo',{token,uid,userName})
        wx.switchTab({
          url: '/pages/my/my',
        })
      },
    })
  }
})