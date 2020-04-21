## 服务端渲染 和 客户端渲染对比
客户端渲染 在前端写代码 数据通过ajax 异步动态获取 seo优化不好
渲染在浏览器进行
服务端渲染 在服务端获取数据 渲染页面 直接将整个页面的结果返回给前端 
增大服务器压力 不适合（cpu密集型操作）
增强seo优化 

## 基本vue 服务器渲染使用

## nuxt框架使用
```
npm install craete-react-app -g  全局安装
create-react-app name  创建项目
```
```js
// 临时下载脚手架创建项目
npx create-react-app name 
```
## 样式配置
1.下载安装 对应预处理语言 和加载器
2.在配置文件里进行配置相当于 main.js 全局引入
## 路由 
<router-view/> = <nuxt/>
<router-link/> = <nuxt-link/>