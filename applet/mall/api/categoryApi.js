const {apiServer} = require('../config/index')
const axios = require('../utils/axios')
module.exports={
  // 获取首页banner 
  getCategoryList(){
    let url =apiServer+'/kind'
    return axios.get(url)
  },
  // 获取产品列表
  getProductList(categoryId){ 
    let url =apiServer+`/goods/${categoryId}/kind`
    return axios.get(url,{page:1,pageSize:1000})
  },


}