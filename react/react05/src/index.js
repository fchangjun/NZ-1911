import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './ReactRedux/store/store'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // Provider 将全局状态对象store 挂载到跟组件的上下文上
  // 挂载之后所有的子组件都可以访问跟组件的上下文
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
