import * as redux from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';

export const history = createHistory();
const middleware = routerMiddleware(history);

export const configure = () => {
  const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};
  const store = redux.createStore(reducers, persistedState, redux.compose(
    redux.applyMiddleware(thunk, middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  store.subscribe(() => localStorage.setItem('reduxState', JSON.stringify(store.getState())));
  return store;
};
