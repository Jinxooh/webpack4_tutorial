import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

const req = require.context('.', true, /^(?!.\/index).*.(js|jsx)$/);

const modules = { };

// 현재 폴더의 reducer다 모아서 import 해주는 기능
req.keys().forEach((key) => {
  const regex = /.\/(.*?).(js|jsx)$/;
  const moduleName = regex.test(key) && key.match(regex)[1];
  let convert = null; // 이름뒤에 Reducer 붙는거 제거, 파일명이 곧 redux state 이름이라서
  if (moduleName.indexOf('Reducer')) convert = moduleName.replace('Reducer', '');
  modules[convert || moduleName] = req(key).default;
});

modules.router = routerReducer;
modules.form = form;

export default combineReducers(modules);
