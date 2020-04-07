const axios = require('../utils/axios')
module.exports={
  // 获取首页banner 
  getBanner(scene = 1003){
    let url ='http://yimei-api.bestyuemei.com/ym/30008/getYmBannerListByScene'
    return axios.post(url,{scene:scene},1)
  },
  // 获取首页推荐列表
  getRecommend(lastProductTopicId = 4){
    let url ='http://yimei-api.bestyuemei.com/ym/30008/getYmProductTopicList'
    return axios.post(url,{lastProductTopicId},1)
  }
}