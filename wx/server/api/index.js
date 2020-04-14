const axios = require('axios')
const {APPID,APPSECRET} = require('../config/index')
  // 获取toke 
  function getAccessToken(){
    let url =`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`
    return axios.get(url)
  }
  // 创建自定义菜单
  function createMenu(access_token){

    let url = `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${access_token}`
    // 自定义菜单的数据结构
    let menuData ={
      button:[
        // 第一个一级菜单
        {
          type:'click',
          name:'点击1',
          key:'click_01'
        },
        {
          name:'二级导航',
          sub_button:[
            {
              "type": "scancode_push", 
              "name": "扫码推事件", 
              "key": "rselfmenu_0_1"
            },
            {
              "type": "scancode_waitmsg", 
              "name": "扫码等待事件", 
              "key": "rselfmenu_0_2"
            },{
              
              "type": "pic_sysphoto", 
              "name": "拍照上传", 
              "key": "rselfmenu_0_3"
            }
          ]
        },
        {	
          "type":"view",
          "name":"想对你说",
          "url":"http://qstest.natapp1.cc/iwantsay"
       }

      ]
    } 

    return  axios.post(url,menuData)
  }
  // 删除自定义菜单 
   function deleteMenu(access_token){

    let url =`https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=${access_token}`
    return axios.get(url)
  }
  //查询自定义菜单接口 
   function  searchMenu(access_token){
    // let access_token = await getToken()
    let url = `https://api.weixin.qq.com/cgi-bin/get_current_selfmenu_info?access_token=${access_token}`
    console.log('searchMenu',url)
     return axios.get(url)
    //  .then((res)=>{
    //    console.log(res.data)
    //  })
  }
  // 获取jsapi_ticker
  function getTicket(access_token){
    let url =`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`
    return axios.get(url)
  }
  module.exports={
    getAccessToken,
    createMenu,
    deleteMenu,
    searchMenu,
    getTicket
  }

// getAccessToken().then((data)=>{
//   let {access_token} = data.data 
//   return createMenu(access_token)
// })
// .then((res)=>{
//   console.log(res)
// })