import React from 'react';
import ReactDOM from 'react-dom';
//引入antd的样式文件
// import 'antd/dist/antd.css';
import store from  './store/store'
import {Provider} from 'react-redux'
import App from './App';
import ExportElsx from './pages/Exsl'
import * as serviceWorker from './serviceWorker';
// ReactDOM.render(
//   <ExportElsx></ExportElsx>
// , document.getElementById('root'));
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
