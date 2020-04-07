const axios = require('../../utils/axios')
Page({
  onLoad(){
    this.getBanner()
  },
  getBanner(){
    /**
     * url :http://yimei-api.bestyuemei.com/ym/30008/getYmBannerListByScene
     * method: post 
     * body: scene 1003 
     * 数据格式是 x-www-formurlencode 
     *  */ 
    let url ='http://yimei-api.bestyuemei.com/ym/30008/getYmBannerListByScene'
    axios.post(url,{scene:1003},1)
    .then((res)=>{
      console.log(res)
    })
    // wx.request({
    //   url: "http://yimei-api.bestyuemei.com/ym/30008/getYmBannerListByScene",
    //   method:"POST",
    //   data:{scene:1003},
    //   header:{
    //     "content-type":'application/x-www-form-urlencoded'
    //     // 注意上传格式   默认是json
    //   },
    //   success(res){
    //     console.log(res)
    //   }
    // })
  }
})