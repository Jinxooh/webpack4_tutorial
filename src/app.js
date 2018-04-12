import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, push } from 'react-router-redux';

import './style/main.scss';

ReactDOM.render(
  <div>hello</div>,
  document.getElementById('app'),
);

module.hot.accept();