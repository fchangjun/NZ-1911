import axios from '../utils/axios'
class Admin {
  login(payload){
    let url = '/mall/admin/login'
    return axios.post(url,payload)
  }
  list(){
    let url ='/mall/admin'
    return axios.get(url)
  }
  add({userName,passWord}){
    let url ='/mall/admin'
    return axios.post(url,{userName,passWord})
  }
  del(_id){
    let url ='/mall/admin'
    // return axios.del(`${url}/${_id}`)
    return axios.delete(url+'/'+_id)
  }
}

export default new Admin()