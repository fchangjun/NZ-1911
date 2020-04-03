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
  }
})