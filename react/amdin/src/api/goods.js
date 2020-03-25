import axios from '../utils/axios'
class Goods {
  findOne(id){
    let url ='/mall/goods/'+id
    return axios.get(url)
  }
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
  update(_id,payload){
    let url =`/mall/goods/${_id}`
    return axios.put(url,payload)
  }
  add(payload){
    let url ='/mall/goods'
    return axios.post(url,payload)
  }
  kindlist(){
    let url ='/mall/kind'
    return axios.get(url)
  }
  kindadd(kindName){
    let url ='/mall/kind'
    return axios.post(url,{kindName})
  }
  kindupdate(_id,kindName){
    let url ='/mall/kind/'+_id
    return axios.put(url,{kindName})
  }
  kinddel(_id){
    let url ='/mall/kind/'+_id
    return axios.delete(url)
  }
}

export default new Goods()