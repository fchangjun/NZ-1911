/*
actionCreator 本质是一个对象 对象里有很多方法
这些方法用来传递奏折
*/ 
import Store from  './store'
export default{
  changeName(){
    console.log('action里的方法')
    // 创建奏折
    let action={
      type:'CHANGE_NAME', //type是必须的告诉老佛爷要修改那一条数据
      payload:'隔壁老王'
    }
    // 发送奏折 将action 提交给老福爷
    Store.dispatch(action)
  },
  changeAge(age){
    let action={
      type:'CHANGE_AGE',
      payload:age
    }

    Store.dispatch(action)
  }
}