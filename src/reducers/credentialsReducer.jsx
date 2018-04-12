import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { List, Record } from 'immutable';

const ADD_DATA = 'credentials/ADD_DATA';
const CHANGE_INPUT = 'credentials/CHANGE_INPUT';
const GET_LIST = 'credentials/GET_LIST';
const UPDATE_CHECKBOX = 'credentials/UPDATE_CHECKBOX';
const UPDATE_CHECKBOX_ALL = 'credentials/UPDATE_CHECKBOX_ALL';
const DISABLE_BUTTON = 'credentials/DISABLE_BUTTON';
const DELETE_ITEMS = 'credentials/DELETE_ITEMS';
const CHANGE_CHECKBOX = 'credentials/CHANGE_CHECKBOX';
const GET_SERVICE_LIST = 'credentials/GET_SERVICE_LIST';
const DELETE_SUMMARY = 'credentials/DELETE_SUMMARY';

const addData = createAction(ADD_DATA);
const changeInput = createAction(CHANGE_INPUT);
const getList = createAction(GET_LIST);
const updateCheckbox = createAction(UPDATE_CHECKBOX);
const updateCheckboxAll = createAction(UPDATE_CHECKBOX_ALL);
const disableButton = createAction(DISABLE_BUTTON);
const deleteItems = createAction(DELETE_ITEMS);
const changeCheckbox = createAction(CHANGE_CHECKBOX);
const getServiceList = createAction(GET_SERVICE_LIST);
const deleteSummary = createAction(DELETE_SUMMARY);

export const actionCreators = {
  addData,
  changeInput,
  getList,
  updateCheckbox,
  updateCheckboxAll,
  disableButton,
  deleteItems,
  changeCheckbox,
  getServiceList,
  deleteSummary,
};

const uuid = require('uuid/v4');

const serviceList = [
  { name: 'automate', disabled: false, read: false, write: false },
  { name: 'products', disabled: false, read: false, write: false },
  { name: 'business', disabled: false, read: false, write: false },
  { name: 'campaigns', disabled: false, read: false, write: false },
];

const initialState = {
  users: {
    list: [],
  },
  groups: {
    list: [],
  },
  roles: {
    list: [],
  },
  isDisable: true,
  filteredList: [],
  input: '',
  serviceList,
};

export default handleActions({
  [ADD_DATA]: (state, { payload: { data, screenName } }) => produce(state, (draft) => {
    if (screenName === 'users') {
      // userId = uuid;
      const CredentialsUser = {
        id: uuid(),
        checked: false,
        ...data,
        createdDate: new Date(),
        modifiedDate: new Date(),
        inuse: false,
        logs: 'logs',
      };
      draft[screenName].list.push(CredentialsUser);
    }
    if (screenName === 'groups') {
      // groupId += 1;
      const CredentialsGroup = {
        id: uuid(),
        checked: false,
        creationTime: new Date(),
        ...data,
      };
      draft[screenName].list.push(CredentialsGroup);
    }
    if (screenName === 'roles') {
      // rolesId += 1;
      const CredentialsRole = {
        id: uuid(),
        checked: false,
        creationTime: new Date(),
        ...data,
      };
      draft[screenName].list.push(CredentialsRole);
    }
  }),
  [CHANGE_INPUT]: (state, { payload }) => produce(state, (draft) => {
    draft.input = payload;
  }),
  [GET_LIST]: (state, { payload }) => produce(state, (draft) => {
    draft.filteredList = payload;
  }),
  [UPDATE_CHECKBOX]: (state, { payload: { id, checked } }) => produce(state, (draft) => {
    const index = draft.filteredList.findIndex(t => t.id === id);
    draft.filteredList[index].checked = checked;
  }),
  [UPDATE_CHECKBOX_ALL]: (state, { payload }) => produce(state, (draft) => {
    draft.filteredList.map(ele => ele.checked = payload.checked);
  }),
  [DISABLE_BUTTON]: (state, { payload }) => produce(state, (draft) => {
    draft.isDisable = payload;
  }),
  [DELETE_ITEMS]: (state, { payload }) => produce(state, (draft) => {
    draft.filteredList = draft.filteredList.filter(ele => !ele.checked);
    draft[payload.screenName].list = draft.filteredList.filter(ele => !ele.checked);
  }),
  [CHANGE_CHECKBOX]: (state, { payload: { name, value, checked } }) => produce(state, (draft) => {
    const index = draft.serviceList.findIndex(t => t.name === name);
    draft.serviceList[index][value] = checked;
  }),
  [GET_SERVICE_LIST]: (state, { payload }) => produce(state, (draft) => {
    if (payload) {
      draft.serviceList = payload.serviceList;
    } else {
      draft.serviceList = serviceList;
    }
  }),
  [DELETE_SUMMARY]: (state, { payload: { screenName, id } }) => produce(state, (draft) => {
    draft[screenName].list = draft[screenName].list.filter(ele => ele.id !== id);
  }),
}, initialState);
