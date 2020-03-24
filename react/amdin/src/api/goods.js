import axios from '../utils/axios'
class Goods {
  list(page = 1,pageSize =2){
    // localhost:3000/goods?page=1&pageSize=5
    let url ='/mall/goods'
    return axios.get(url,{params:{page,pageSize}})
  }
  del(_id){
    let url =`/mall/goods/${_id}`
    return axios.delete(url)
  }
  putaway(_id,putaway){
    let url =`/mall/goods/${_id}/putaway`
    return axios.put(url,{putaway})
  }
}

export default new Goods()