import axios from 'axios' 
import store from '../store/store'
import actionCreator from '../store/actionCreatore'
axios.interceptors.request.use(function (config) {
  //在拦截器里添加请求头
  let token =localStorage.getItem('token')||'no token'
              
  config.headers.authorization = 'Bearer '+ token 
  console.log(config)
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  let {code,msg} =response.data 
  console.log('响应拦截器',code,msg)
  if(code === 402){
    // token失效
    let action = actionCreator.changeTokenModal(true)
    store.dispatch(action)
  }
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
export default axios 