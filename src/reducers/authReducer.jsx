import {
  AUTH_ADMIN,
  UNAUTH_ADMIN,
} from '../actions/actionTypes';

const initialValues = {
  authenticated: true,
  user: {
    id: 'authuser',
    name: 'test admin',
  },
  authorization: '',
  loginToken: '',
  success: '',
  error: '',
};

export const authReducer = (state = initialValues, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_ADMIN:
      return { ...state, error: '', authenticated: true, ...payload };
    case UNAUTH_ADMIN:
      return { ...initialValues, ...payload };
    default:
      return state;
  }
};

export default authReducer;
