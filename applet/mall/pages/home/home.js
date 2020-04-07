const {getBanner,getRecommend} =require('../../api/homeApi')
// getApp() 可以获取小程序的实例
Page({
  data:{
    bannerList:[],
    productTopicList:[]
  },
  onLoad(){
    this.getBanner()
    this.getRecommend()
  },
  getBanner:async function(){
     let {code,data,msg} = await getBanner()
     if(code !== 200){ console.log(msg)}
     this.setData({bannerList:data.bannerList})
  },
  async getRecommend(){
     let {data} = await getRecommend()
     console.log(data.productTopicList)
     this.setData({productTopicList:data.productTopicList})
   
  },
  // 跳转web页面
  goWeb(e){
    let {weburl} =e.currentTarget.dataset
   console.log(weburl)
     wx.navigateTo({
       url: `/pages/web/wep?weburl=${weburl}`,
     })
  }
})