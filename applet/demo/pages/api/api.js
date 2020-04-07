Page({
  data:{
    result:"等待扫码结果"
  },
  showToast(){
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',

    // })   
    // wx.showLoading({
    //   title: '数据加载ing',
    // })
    // wx.showModal({
    //   title:"hehe",
    //   success(res){
    //     console.log(res)
    //   }
    // })
    wx.showActionSheet({
      itemList: ['支付宝','微信','一行卡'],
      success(res){
        console.log(res)
      }
    })
  },
  hideToast(){
    wx.hideLoading({
      complete: (res) => {},
    })
    // wx.hideToast({
    //   complete: (res) => {},
    // })
  },
  // 修改标题
  changeTitle(){
    wx.setNavigationBarTitle({
      title: '好吧'
    })
  },
  onLoad(){
     wx.setStorageSync('test', {us:123,ps:456})
    // let  result = wx.getStorageSync('user')
    // console.log(result)
    // wx.removeStorageSync('test')
    // wx.clearStorageSync()
    //监听网络环境发生改变 
    wx.onNetworkStatusChange((result) => {
      console.log(result)
      let {networkType} = result 
      if(networkType !== 'wifi'){
        wx.showModal({
          title:`你的网络环境变化${networkType}是否继续`,
          success(res){
            console.log(res)
          }
        })
      }
    })
  },
  // phone
  playPhone(){
    wx.makePhoneCall({
      phoneNumber: '110' //仅为示例，并非真实的电话号码
    })
  },
  scanCode(){
    wx.scanCode({
      success: (res)=> {
        console.log(res)
        let {result} = res 
        this.setData({result})
      }
    })
  }
})