import { bindActionCreators } from 'redux';
import { actionCreators as credentialsActions } from 'reducers/credentialsReducer';
import { actionCreators as settingsActions } from 'reducers/settingsReducer';
import store from './index';

const { dispatch } = store;

export const CredentialsActions = bindActionCreators(credentialsActions, dispatch);
export const SettingsActions = bindActionCreators(settingsActions, dispatch);
