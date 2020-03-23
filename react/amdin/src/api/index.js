import axios from '../utils/axios'
class Admin {
  login(payload){
    let url = '/mall/admin/login'
    return axios.post(url,payload)
  }
}

export default new Admin()