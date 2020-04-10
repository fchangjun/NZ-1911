const {apiServer} = require('../config/index')
const axios = require('../utils/axios')
module.exports={
  // 下单 
  createOrder(orderInfo){
    let url =apiServer+'/order'
    return axios.post(url,orderInfo)
  },
  //获取用户的订单列表
  getUserOrderList(state=null){
    let uid =wx.getStorageSync('userInfo').uid ||''
    let url =`${apiServer}/order/${uid}/user?state=${state}`
    return axios.get(url)
  }
}