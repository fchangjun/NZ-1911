Page({
  data:{
    latitude:0,
    longitude:0,
    rotate:45,
    controls:[
      {
      id: 1,
      iconPath: '/common/icon/mobile.png',
      position: {
        left: 0,
        top: 400 ,
        width: 40,
        height: 40
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: '/common/icon/mobile.png',
      position: {
        left: 0,
        top: 200 ,
        width: 40,
        height: 40
      },
      clickable: true
    }
  ],
  // 地图标记
  markers:[{
    iconPath: "/common/tabbar/cart.png",
    title:"呵呵哒",
    id: 0,
    latitude: 23.099994,
    longitude: 113.324520,
    width: 50,
    height: 50
  },
  {
    iconPath: "/common/tabbar/home.png",
    id: 1,
    latitude: 23.099999,
    longitude: 113.334570,
    width: 50,
    height: 50
  }],
  // 路线
  polyline: [{
    points: [{
      longitude: 113.3245211,
      latitude: 23.10229
    }, {
      longitude: 113.324520,
      latitude: 23.21229
    }],
    color:"#FF0000DD",
    width: 2,
    dottedLine: true
  }]
  },
// 点击控件
controltap(e){
  let {controlId} = e 
  console.log(e)
  if(controlId===1){
    this.getLocation()
  }
},
// 点击markes 事件
markertap(e){
console.log(e)
},
//视野发生改变触发
regionchange(e){
  console.log(e)
},
//初次加载
onLoad(){
 this.getLocation()
},
//获取地理位置
getLocation(){
  wx.getLocation({
    type: 'wgs84',
    success:(res)=>{
      console.log(res)
      let  {latitude,longitude} = res 
      this.setData({latitude,longitude})
    },
    fail(err){
      console.log(err)
    }
  })
},
// 跳转微信地图
goWxMap(){
  wx.openLocation({
    latitude: 23.099999,
    longitude: 113.324520,
  })
},
// 选择地理位置
chooseLocation(){
  wx.chooseLocation({
    success(res){
      console.log('选择位置',res)
    }
  })
}
})