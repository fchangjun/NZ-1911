## html+css +js  必须会    初级
## vue react 小程序  最少会一个  中级
## 微信开发 混编app 服务器运维 加分项  高级

### 微信开发 公众号开发
* 傻瓜模式 （文字小编）
* 天神下凡  
  消息回复 
  自定义菜单

### 消息回复
wx自己玩
1. 用户在公众号 输入信息  发送到微信的服务器
2. 微信服务器内部验证匹配规则 
3. 将匹配到的结果发送给用户
开发者参与
1. 用户在公众号 输入信息  发送到微信的服务器
2. 微信服务器将信息转发到开发者服务器
3. 开发者服务器内部做逻辑出里
4. 将结果发送给wx服务器
5. wx服务器将结果发送给客户端

周公解梦 星座奇缘 （星座配配对）每日歌曲 星座运势查询 天气查询 话费查询
wx 官方提供的消息回复功能 是固定写死的 无法添加一些业务逻辑

#### 确定接受公众号消息的服务器 (验证服务器的安全性)
https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Access_Overview.html
1. 填写服务器信息
2. 开发者提交信息后，微信服务器将发送GET请求到填写的服务器地址URL上，GET请求携带参数如下表所示 
 * 创建本地服务器
 * 进行内网穿透  在本地服务器接受微信发送的消息
3. 第三方服务器进行配置验证
 * 将token、timestamp、nonce三个参数进行字典序排序 
 * 将三个参数字符串拼接成一个字符串进行sha1加密 
 * 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信

#### 接受公众号发送的消息
当普通微信用户向公众账号发消息时，微信服务器将(POST)消息的(XML)数据包到开发者填写的(URL)上。
1. 接受普通的消息 文本 语音 图片 .....
2. 事件消息 关注事件 取消关注
3. 菜单栏的点击事件

#### 回复消息
回复xml 数据格式 文本音乐图片 ....


### 调用微信公众号提供的功能接口
#### 获取调用接口的唯一凭证 access_token 
```
https请求方式: GET https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
```
* 网络请求 get方法
* 参数 APPID APPSECRET

#### access_token 缓存处理
* access_token 有调用限制 1天2000次 
* access_token 有效期2小时7200
* 将access_token 保存到本地 2小时 使用的时候如果本地有 直接用本地的  如果本地没有再去请求网络的 存入本地
* radius memchache ... 缓存库 ->存一个本地文件
#### 创建自定义菜单
```
http请求方式：POST（请使用https协议） https://api.weixin.qq.com/cgi-bin/menu/create?access_token=ACCESS_TOKEN
``` 
* 服务器器端请求 post方法
* 需要一个叫ACCESS_TOKEN
* 自定义菜单的数据包