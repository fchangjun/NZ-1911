const {apiServer} = require('../config/index')
const axios = require('../utils/axios')
module.exports={
  // 获取首页banner 
  getCategoryList(){
    let url =apiServer+'/kind'
    return axios.get(url)
  },

}