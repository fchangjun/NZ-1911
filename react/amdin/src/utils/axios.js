import axios from 'axios' 

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
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
export default axios 