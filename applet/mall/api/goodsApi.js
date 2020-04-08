const {apiServer} = require('../config/index')
const axios = require('../utils/axios')
module.exports={
  // 获取首页banner 
  getGoodsInfo(id){
    let url =apiServer+'/goods/'+id
    return axios.get(url)
  }
}