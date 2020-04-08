const categoryApi  = require('../../api/categoryApi')
Page({
  data:{
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
   this.setData({categorys:list})
  },
  // 侧边栏的点击事件
  selectNav(e){
    let{index,categoryId} = e.currentTarget.dataset
    this.setData({selCategoryId:categoryId,selIndex:index})
  }
})