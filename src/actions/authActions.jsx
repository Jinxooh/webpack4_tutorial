/* jshint esversion: 6 */
import axios from 'axios';
import { baseURL, authHeaders } from 'helpers/httpRequestHelper';
import { push } from 'react-router-redux';
import { handleError } from 'actions/actionHelpers';
import { AUTH_ADMIN, UNAUTH_ADMIN } from 'actions/actionTypes';

export function loginWithId({ userId, password }) {
  return (dispatch) => {
    const config = { ...baseURL };
    axios.put('/admin/login', { userId, password }, config)
      .then((response) => {
        dispatch({ type: AUTH_ADMIN, payload: response.data.resData });
        localStorage.setItem('findball_admin_auth', JSON.stringify(response.data.resData));
        dispatch(push('/'));
      })
      .catch(error => handleError(UNAUTH_ADMIN, error, dispatch));
  };
}

export function loginWithToken() {
  return (dispatch, getState) => {
    const config = { ...baseURL, ...authHeaders(getState().auth) };
    axios.put('/admin/tokenLogin', null, config)
      .then((res) => {
        dispatch({ type: AUTH_ADMIN, payload: { success: res.data.resMessage, user: res.data.resData } });
      })
      .catch(error => handleError(UNAUTH_ADMIN, error, dispatch));
  };
}

export function logoutAdmin() {
  return (dispatch, getState) => {
    const config = { ...baseURL, ...authHeaders(getState().auth) };
    axios.put('/admin/logout', null, config)
      .then((res) => {
        localStorage.removeItem('findball_admin_auth');
        dispatch(push('/login'));
        dispatch({ type: UNAUTH_ADMIN, payload: { success: res.data.resMessage } });
      })
      .catch(error => handleError(UNAUTH_ADMIN, error, dispatch));
  };
}
