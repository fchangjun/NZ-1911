import axios from '../utils/axios'
class Upload {
  img(payload){
    let url ='/mall/upload'
    return axios.post(url,payload)
  }

}

export default new Upload()