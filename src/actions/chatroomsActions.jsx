import {
  ADD_ITEM_IN_ACTIVE_CHATROOM_LIST,
  ADD_ITEM_IN_CHATROOM,
  REMOVE_ITEM_IN_ACTIVE_CHATROOM_LIST,
  UPDATE_CHATROOMS_META,
  UPDATE_ITEM_IN_ACTIVE_CHATROOM_LIST,
} from './actionTypes';

export const addItemInActiveChatroomList = id => (dispatch, getState) => {
  const activeChatroomIndex = getState().chatrooms.activeChatroomList.findIndex(room => room.id === id);
  console.log('activeChatroomIndex', activeChatroomIndex);
  if (activeChatroomIndex !== -1) {
    // already added => just make it active
    dispatch({ type: UPDATE_CHATROOMS_META, payload: { activeChatroomIndex } });
  } else {
    // add
    dispatch({ type: ADD_ITEM_IN_ACTIVE_CHATROOM_LIST, payload: { id, width: 320, height: 500, x: 10 + 320 + 10, y: 60 } });
  }
};

export const addItemInChatroom = (item, roomId, callback = () => {}) => (dispatch, getState) => {
  const index = getState().chatrooms.chatroomList.findIndex(room => room.id === roomId);
  if (index !== -1) {
    console.log('index', index);
    dispatch({ type: ADD_ITEM_IN_CHATROOM, payload: { item, index } });
    callback();
  }
};


export const removeItemInActiveChatroomList = index => dispatch => dispatch({ type: REMOVE_ITEM_IN_ACTIVE_CHATROOM_LIST, payload: { index } });

export const updateChatroomsMeta = payload => dispatch => dispatch({ type: UPDATE_CHATROOMS_META, payload });

export const updateItemInActiveChatroomList = (item, index) => (dispatch) => {
  dispatch({ type: UPDATE_ITEM_IN_ACTIVE_CHATROOM_LIST, payload: { item, index } });
};
