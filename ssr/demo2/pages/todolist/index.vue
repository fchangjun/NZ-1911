<template>
  <div>
     <h4>这里是todolist</h4>
     <hr>
     <h5>count</h5>
     <p>numm:{{$store.state.count}}</p>
     <p>double:{{$store.getters.double}}</p>
     <button @click="$store.dispatch('changeCountSync',5)">action改变数量</button>
     <button @click="$store.commit('changeCount',4)">commit改变数量</button>
     <hr> 
     <h5>模块age</h5>
    <p>name:{{$store.state.hehe.name}}</p>
    <button @click="$store.commit('hehe/changeName','二大爷')">commit改变数量</button>
  </div>
</template>
<script>
export default {
  
  fetch({$axios,store}){
    
    // let {$axios,store} = context
    // context.store.commit('hehe/changeName','三大爷')
    let  url ='/hehe/music/api/getTopBanner?g_tk=1928093487&inCharset=utf8&outCharset=utf-8&notice=0&format=json&platform=yqq.json&hostUin=0&needNewCode=0&-=recom04378342955979164&data=%7B%22comm%22:%7B%22ct%22:24%7D,%22category%22:%7B%22method%22:%22get_hot_category%22,%22param%22:%7B%22qq%22:%22%22%7D,%22module%22:%22music.web_category_svr%22%7D,%22recomPlaylist%22:%7B%22method%22:%22get_hot_recommend%22,%22param%22:%7B%22async%22:1,%22cmd%22:2%7D,%22module%22:%22playlist.HotRecommendServer%22%7D,%22playlist%22:%7B%22method%22:%22get_playlist_by_category%22,%22param%22:%7B%22id%22:8,%22curPage%22:1,%22size%22:40,%22order%22:5,%22titleid%22:8%7D,%22module%22:%22playlist.PlayListPlazaServer%22%7D,%22new_song%22:%7B%22module%22:%22newsong.NewSongServer%22,%22method%22:%22get_new_song_info%22,%22param%22:%7B%22type%22:5%7D%7D,%22new_album%22:%7B%22module%22:%22newalbum.NewAlbumServer%22,%22method%22:%22get_new_album_info%22,%22param%22:%7B%22area%22:1,%22sin%22:0,%22num%22:10%7D%7D,%22new_album_tag%22:%7B%22module%22:%22newalbum.NewAlbumServer%22,%22method%22:%22get_new_album_area%22,%22param%22:%7B%7D%7D,%22toplist%22:%7B%22module%22:%22musicToplist.ToplistInfoServer%22,%22method%22:%22GetAll%22,%22param%22:%7B%7D%7D,%22focus%22:%7B%22module%22:%22QQMusic.MusichallServer%22,%22method%22:%22GetFocus%22,%22param%22:%7B%7D%7D%7D'
    return $axios.get(url).then((res)=>{
      store.commit('hehe/changeName','三大爷')
    })
  },
  beforeMount(){
    console.log('挂载前')
  },
  mounted(){
    console.log('挂载结束')
  },
  created(){
    console.log('todolist',this)
  }
}
/*
fetch asyncData 都是在页面渲染前执行
fetch 将网络 请求的数据提供给全局状态 
asyncData 将数据提供给组件
*/ 
</script>  