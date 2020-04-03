Page({
  //数据
  data:{
    name:"韩梅梅",
    arr:[1,2,3,4],
    obj:{us:123,ps:456},
    length:1
  },
  // 生命周期 内置钩子
  // 事件
  changeName(e){
    console.log(e)
    let {hehe,xixi} = e.target.dataset
    this.setData({name:hehe})
  }
})