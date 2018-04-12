import { bindActionCreators } from 'redux';
import store from './index';
import { actionCreators as credentialsActions } from '../reducers/credentialsReducer';

const { dispatch } = store;

export const CredentialsActions = bindActionCreators(credentialsActions, dispatch);
