import { bindActionCreators } from 'redux';
import { actionCreators as credentialsActions } from 'reducers/credentialsReducer';
import store from './index';

const { dispatch } = store;

export const CredentialsActions = bindActionCreators(credentialsActions, dispatch);
