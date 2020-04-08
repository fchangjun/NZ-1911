const categoryApi  = require('../../api/categoryApi')
const {config} = getApp()
console.log(config)
Page({
  data:{
    imgServer:config.imgServer,
    categorys:[],
    selIndex:0,
    selCategoryId:''
  },
  onLoad(){
    this.getCategoryList()
  },
  // 获取类别列表
  async getCategoryList(){
    let {code,list,msg} =await categoryApi.getCategoryList() 
    let result = list.map((item,index)=>{
      item.list=[] 
      return item
    })
   
   this.setData({categorys:result})
   //第一条数据应该是默认显示
   let first = result[0]._id
   this.handleListData(first)
  },
  // 侧边栏的点击事件
  selectNav(e){
    let{index,categoryId} = e.currentTarget.dataset
    this.setData({selCategoryId:categoryId,selIndex:index})
    this.handleListData(categoryId)

  },
  // 处理列表数据 
  async handleListData(categoryId){
    // 先判断这个id的数据有还设有没有
    let categorys = this.data.categorys 
    let  exitIndex = -1 
    for (let index = 0; index < categorys.length; index++) {
      if(categorys[index]._id ===categoryId){
        exitIndex  = index 
      }
    }
    // 判断商品数据是否存在 如果存在 不需要网络请求 不存在需要网络请求
    if(categorys[exitIndex].list.length ===0 ){
      console.log("没有数据")
      let {list}  =await categoryApi.getProductList(categoryId) 
      categorys[exitIndex].list = list 
    }else{
      console.log('有数据')
    }
    this.setData({categorys})
    console.log(this.data.categorys)
  },
  // 跳转到商品详情
  goDetail(e){
   
    wx.navigateTo({
      url: '/pages/detail/detail?productId='+e.currentTarget.dataset.id,
    })
  }
})