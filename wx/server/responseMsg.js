module.exports ={
  responseText(from,to,text){
    return `<xml>
    <ToUserName><![CDATA[${to}]]></ToUserName>
    <FromUserName><![CDATA[${from}]]></FromUserName>
    <CreateTime>12345678</CreateTime>
    <MsgType><![CDATA[text]]></MsgType>
    <Content><![CDATA[${text}]]></Content>
  </xml>`
  },
  responseMusic(from,to,name,desc,media_id,url){
    return `<xml>
    <ToUserName><![CDATA[${to}]]></ToUserName>
    <FromUserName><![CDATA[${from}]]></FromUserName>
    <CreateTime>12345678</CreateTime>
    <MsgType><![CDATA[music]]></MsgType>
    <Music>
      <Title><![CDATA[${name}]]></Title>
      <Description><![CDATA[${desc}]]></Description>
      <MusicUrl><![CDATA[${url}]]></MusicUrl>
      <HQMusicUrl><![CDATA[${url}]]></HQMusicUrl>
      <ThumbMediaId><![CDATA[${media_id}]]></ThumbMediaId>
    </Music>
  </xml>`

  }
}