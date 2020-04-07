Page({
  data:{
     imgs:[
     ] 
  },
  // 生命周期
  onLoad(){
    this.getBannerData()
  },
  // 业务逻辑
  getBannerData(){
    console.log(this)
    let url ='http://yapi.demo.qunar.com/mock/86031/getBanner'
    wx.request({
      url: url,
      data:{},
      method:"GET",
      success:(data)=>{
        console.log('请求成功')
        let {banners} = data.data
        console.log(banners)
        this.setData({imgs:banners})
      },
      fail(){
        console.log('请求失败')
      }
    })
  },
  // 路由跳转
  jumpTab(){
    console.log(111)
    wx.switchTab({
      url: '/pages/my/my',
      fail(err){
        console.log(err)
      }
    })
  },
  // 跳转非tab页面
  jumpNoTab(){
    wx.switchTab({
      url: '/pages/route/route',
      fail(err){
        console.log(err)
      }
    })
  },
  // 通过navagator 跳转到非tabbar 页面
  jumpNoTabNavagtor(){
    wx.navigateTo({
      url: '/pages/route/route',
    })
  },
  // 通过redireact 跳转到非tabbar 页面
  jumpNoTabRedirect(){
    wx.redirectTo({
      url: '/pages/route/route?us=123&ps=123',
    })
  },
  // 跳转到任何界面
  jumpAny(){
    wx.reLaunch({
      // url: '/pages/route/route',
      url: '/pages/my/my',
    })
  }
})