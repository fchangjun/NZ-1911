const {apiServer} = require('../config/index')
const axios = require('../utils/axios')
module.exports={
  // 账号登录 
  normalLogin(userName,passWord){
    let url =apiServer+'/user/login'
    return axios.post(url,{userName,passWord})
  },
  // 账号注册
  normalReg(userName,passWord){
  
    let url =apiServer+'/user/reg'
    return axios.post(url,{userName,passWord})
  },
  // 小程序登录
  wxLoign(code){
    let url =apiServer+'/user/wxlogin'
    return axios.post(url,{code})
  },

}