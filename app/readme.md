## 
1. 区分app web(app)
2. app如何开发的
3. H5 工程师如何开发一个app
## 
1. 能将做一个简单的app 在手机上运行
2. 了解概念 能够面试描述清楚
3. 了解概念 无法描述
4. 一脸茫然

## app 和webapp 和 wap区别

app 手机上的软件 抖音 谷歌 uc 浏览器 qq  C/S 
webApp/wap 网页   运行在手机浏览器上的   B/S

### 网页开发 
  html+css+js (jq vue react)
### app开发
  * ios  原生
  osx 系统  
  xcode开发工具
  oc swift 语言

  * andriod 
  osx window  系统
  andoroid studio ....开发工具
  java 安卓  语言 

  需求 做一个系统 web ios 安卓 3个月
  后端 2人 2*10k*3     6w
  web 2人 2*7k*3      4.2w
  ios 2人 2*15*3      9w   
  安卓 2人 10k         6w

* 混合开发 套壳  hybrid app
  app 内部有一个模块 webview 可以运行浏览器的网页
  
  1. 显示功能 
    用H5开网页 
    用框架 网页外边包一层app的壳子（ios 安卓）
  2. 调用硬件功能
 
### 
原生开发          运行效率高 用户体验好 流畅  门槛高 成本低
hybrid（框架开发） 运行效率一般 用户体验一般 流畅一般  门槛低 成本低

### H5APP 开发框架
dcloud (uniapp 5+) 云打包 不需要配置环境 下载hbulder 就可以
apicloud
cordova(phonegap)
配置环境 xcode开发工具  安卓 安卓开发工具
...

#### 手机连接
ios 直连
安卓 开发者模式 百度
数据线 问题
#### 打包
vue react  打包 指的是 将项目进行编译压缩处理 网页 -》网页
app中打包  将项目 变成app安装包  （xxx.apk） (xxx.ipa)

安卓的打包和上线应用商店一般是免费的
ios打包 需要开发者证书 个人开发者证书 $99  企业证书 $299一年

框架的方式 
1. 开发便捷 就是写页面 之后套壳
2. app功能 被框架所限制
3. 计算能力低  21w次加密解密计算  
webview  5% -10% 
app 调用用手机硬件100%
我方
电脑 5-10s  
安卓  30分钟  原生开发
ios  15分钟   20-30s wikiview 
已有项目
app  20s
4. 项目从头到尾 不需要原生开发工程师参与 


#### 需要原生开发工程师来参与的
1. h5写页面
2. 原生开发工程师 打包

webview 可以拦截所有的网络请求 
h5 和原生中间规定一套请求的规范  hehe://调用的功能
网页发起请求   webview进行拦截 满足规范 通过原生的方式来调用摄像头功能
JsBridge 进行原生和js 通信的模块
hehe://getPhoto
#### 不需要原生开发工程师来参与的通过框架
1. h5 写页面
2. 框架实现打包
3. h5通过框架提供的api 来进行调用硬件的功能