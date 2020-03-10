### vue的更新队列
将同一个事件循环内的所有数据操作进行和并 然后统一更新
并不是数据修改一次就更新一次
### Vue.use() 全局注册
自动执行引入模块内部的install方法
install 方法一般做的是全局注册组件
### 双向数据绑定
v-model 
使用场景 1.表单元素上 2.组件上
在组件使用v-model 
提供可一个叫 value 自定义属性 
提供了一个叫 input 的自定义事件

### 事件修饰符
将使用事件的方法进行简化

### 前端效率优化
分析项目项目需要优化的地方

#### 分析引入文件的大小 ：webpack-bundle-analyzer
1. 下载安装
npm install webpack-bundle-analyzer --save-dev 
2. vue.config.js 配置
```
module.export:{
  ...
  chainwebpack:(config)=>{
    ....
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end();
      }
    } else {
    }
  }
}
```
3. 在package.json 中配置分析指令
```
{
  ...
  "script":{
     "report": "npm_config_report=true npm run build"
  }
}
```
4.通过命令使用
```
npm run report
```
##### lighthouse 检测一个网页运行效率
1. 下载安装
```
npm install lighthouse -g 
```
2. 使用
```
lighthouse 要检测的网址 --view
```

