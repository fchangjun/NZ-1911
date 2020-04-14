const axios = require('axios')
const {APPID,APPSECRET} = require('../config/index')

  // 获取toke 
  function getAccessToken(){
    let url =`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`
    return axios.get(url)
  }
  // 创建自定义菜单
  function createMenu(access_token,){
    let url = `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${access_token}`
    // 自定义菜单的数据结构
    let menuData ={
      button:[
        // 第一个一级菜单
        {
          type:'click',
          name:'第一个按钮',
          key:'click_01'
        },
        {
          type:'click',
          name:'第二个按钮',
          key:'click_01'
        },
        {
          type:'click',
          name:'第三个按钮',
          key:'click_01'
        }
      ]
    } 

    return  axios.post(url,menuData)
  }

  module.exports={
    getAccessToken,
    createMenu
  }

// getAccessToken().then((data)=>{
//   let {access_token} = data.data 
//   return createMenu(access_token)
// })
// .then((res)=>{
//   console.log(res)
// })