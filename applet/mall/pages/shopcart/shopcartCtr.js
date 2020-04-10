class ShopCartCtrl{
  // 获取购物车数据
  getData(){
    return wx.getStorageSync('shopcart')||[]
  }
  // 设置购物车数据
  setData(data){
    wx.setStorageSync('shopcart', data)
  }
  // 添加购物车数据
  add(info,count=1){
    let data = this.getData() 
    let {stock,price,name,_id,desc,kind,goodsImgPath}=info
    let goodsImg = goodsImgPath[0]
    // 判断产品在购物车中是否存在 存在 数量+  不存在就是push
    let existIndex = this.isExist(_id)
    if(existIndex === -1){
      // 不存在新增
      let selected = true
      data.push({stock,price,name,_id,desc,kind,goodsImg,count,selected})
    }else{
      // 存在数据相加
      data[existIndex].count +=Number(count)
    }
    this.setData(data)
  }
  // 判断产品是否存在 
  isExist(id){
    // 获取所有购物车数据
    let data = this.getData()
    for (let index = 0; index < data.length; index++) {
      if(id === data[index]._id){
        // 返回重复的下标
        return index
      }
    }
    return -1
  }
  // 选择一个
  selectOne(id){
    let data = this.getData() 
    let index = this.isExist(id) 
    data[index].selected = ! data[index].selected 
    this.setData(data)
  }
  // 选择全部
  selectAll(state){
    let data = this.getData() 
    let result = data.map((item)=>{
      console.log(item)
      item.selected = state
      return item
    })
    this.setData(result)
  }
  // 获取总数量和总价格
  getAllCountPrice(){
    let data = this.getData() 
    let price =0 
    let count =0 
     data.map((item)=>{
      count += Number(item.count)
      price += Number(item.count)*Number(item.price) 
      return item
     })
    return {price,count}
  }
  // 获取选中的数量和价格
  getSelCountPrice(){
    let data = this.getData() 
    let price =0 
    let count =0 
     data.map((item)=>{
       if(item.selected){
         count += Number(item.count)
         price += Number(item.count)*Number(item.price) 
       }
      return item
     })
    return {price,count}
  }
  // 数量增加
  increase(id,count = 1){
    let  data = this.getData()
    let index = this.isExist(id) 
    data[index].count+=count 
    this.setData(data)
  }
  // 熟练减少  数量-1 不能减到0 
  decrease(id,count=1){
    let data = this.getData() 
    let index = this.isExist(id)
    if(data[index].count>1){
      data[index].count -= count
    this.setData(data)
    }
  }
  // 删除某一条数据
  delete(id){
    let data = this.getData() 
    let result = data.filter((item)=>{
      if(item._id === id){
        return false 
      }else{
        return true 
      }
    })
    this.setData(result)
  }
  //选中的所有数据
  getSelectList(){
    let data = this.getData() 
    let result = data.filter((item)=>{
      return item.selected
    })
    return result
  } 
  // 下单之后更新购物车数据 将下过单的删除 
  rmOrderGoods(){
    let data = this.getData()
    let result = data.filter((item)=>{
       return !item.selected
    })
    this.setData(result)
  }
}
module.exports =new ShopCartCtrl()