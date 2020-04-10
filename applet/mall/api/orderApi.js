const {apiServer} = require('../config/index')
const axios = require('../utils/axios')
module.exports={
  // 下单 
  createOrder(orderInfo){
    let url =apiServer+'/order'
    return axios.post(url,orderInfo)
  }
}