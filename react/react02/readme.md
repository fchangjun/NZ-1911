### react 脚手架工具
npm  install create-react-app -g 
create-react-app  -V
create-react-app 项目名字 通过脚手架工具创建项目

注意：部分插件的版本依赖问题  需要打开旺旺大礼包
npm run  eject  
打开旺旺大礼包之前执行一次本地git仓库的提交

npm start 跳转到实例界面项目就算创建ok

#### 基本指令
npm start 本地开发环境运行
npm run eject 解开插件包
npm run build 编译打包
##### 基本目录结构
build 打包后的文件目录
config 项目的配置目录
script js启动脚本
src 项目的源码目录
.gitignore git 上传的忽略文件
package.josn 

#### 组件的创建
15 createClass 方法
16 通过class关键字或者函数来创建组件
#### 类组件函数组件
类组件 （功能组件，智能组件）
  用class 关键字创建的组件  
  有state值 能修改state值
  能写jsx 
  有生命周期
函数组件 (ui组件，木偶组件，傻瓜组件)
  用函数创建的组件 
  没有state 就不能修改数据
  没有生命周期
  只能写jsx 
  只能接受props 渲染界面

### 受控组件 非受控组件
不是一种新的组件而是获取表单数据的2中方式 

非受控组件  通过ref 获取表单数据

傻瓜组件



