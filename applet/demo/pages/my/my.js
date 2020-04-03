Page({
  onLoad(){
    //  页面重新加载的时候才会触发 tab中切换页面没有销毁 只会触发一次
    console.log('页面加载')
  },
  onReady(){
    console.log('页面渲染完成之后触发')
  },
  onUnload(){
    // 页面卸载的时候会触发 缓存起来就不会触发
    console.log('页面卸载')
  },
  onShow(){
    console.log('页面显示')
  },
  onHide(){
    console.log('页面隐藏')
  },
  /*
  * 提供的功能函数
  */ 
   onPullDownRefresh(){
     console.log('下拉刷新了')
   },
   onReachBottom(){
     console.log('上拉')
   }
})