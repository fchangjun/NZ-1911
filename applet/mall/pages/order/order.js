const shopCartCtr = require('../shopcart/shopcartCtr')
const {config} = getApp()
Page({
  data:{
    imgServer:config.imgServer,
    list:[],
    price:0,
    count:0,
    address:null,
  },
  onLoad(){
    let address = wx.getStorageSync('address')
    let list = shopCartCtr.getSelectList() 
    console.log(list)
    let {price,count} = shopCartCtr.getSelCountPrice()
    this.setData({address,list,price,count})
  },
  // 选择地址
  selAddress(){
   wx.chooseAddress({
     complete: (res) => {
    
        // 将地址信息保存到localstore里 
        wx.setStorageSync('address', res)
        this.setData({address:res})
     },
   })
  },
  // 下单
  sendOrder(){
    // 判断用户是否已经登录 
    let {token} = wx.getStorageSync('userInfo')
    if(token){
      // 提交订单
      let {list,address,price,count} = this.data 
      // 地址的拼接 
      console.log(address)
      let addressDetail  = address.provinceName+address.cityName+address.countyName+address.detailInfo 
      // 拼接订单列表 
      let goodsList =list.map((item)=>{
        return {
          goodsId:item._id,
          count:item.count,
          price:item.price,
          name:item.name,
          image:item.goodsImg
        }
      })
      let obj={"goodsList":goodsList,
      "uid":wx.getStorageSync('userInfo').uid,
      "address":addressDetail,
      "phone":address.telNumber
      }
      console.log(obj)
    }else{
      wx.showModal({
        title: '下单失败',
        content: '请先登录',
        success (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/login',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    
    }
  }
})