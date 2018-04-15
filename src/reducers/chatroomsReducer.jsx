import {
  // auth
  UNAUTH_ADMIN,
  ADD_ITEM_IN_ACTIVE_CHATROOM_LIST,
  ADD_ITEM_IN_CHATROOM,
  REMOVE_ITEM_IN_ACTIVE_CHATROOM_LIST,
  UPDATE_CHATROOMS_META,
  UPDATE_ITEM_IN_ACTIVE_CHATROOM_LIST,
} from 'actionTypes';

const meta = {
  selectedRoom: {},
  currentMission: {},
  createdTeamplayRoomUid: undefined,
  isMoreDataAvailable: true,
  prevFirstItemId: undefined,
};

const itemsMeta = {
  orderBy: 'id',
  orderDirection: 'ASC',
  page: 1,
  limit: 30,
};

const initialValues = {
  chatroomsMeta: {
    activeChatroomIndex: 0,
    toolBar: {
      x: 400,
      y: 100,
      width: 300,
      height: 400,
    },
  },
  chatroomList: [
    {
      id: 0,
      type: 'web',
      status: 'auto', // joinRequested, withBot, inService, complete
      user: {
        id: 'user1',
        name: 'user1',
      },
      chats: new Array(40).fill(undefined).map((item, index) => ({
        id: index,
        type: 'text',
        senderId: index % 2 === 0 ? 'user1' : 'authuser',
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        timestamp: new Date().getTime() + (index * 1000),
      })),
    },
    {
      id: 1,
      type: 'kakao',
      status: 'auto', // joinRequested, withBot, inService, complete
      user: {
        id: 'user2',
        name: 'user2',
      },
      chats: new Array(40).fill(undefined).map((item, index) => ({
        id: index,
        type: 'text',
        senderId: index % 2 === 0 ? 'user2' : 'authuser',
        text: 'content',
        timestamp: new Date().getTime() + (index * 1000),
      })),
    },
  ],
  activeChatroomList: [
    {
      id: 0,
      width: 320,
      height: 500,
      x: 10,
      y: 60,
    },
    {
      id: 1,
      width: 320,
      height: 500,
      x: 10 + 320 + 10,
      y: 60,
    },
  ],
};

export const chatroomsReducer = (state = initialValues, action) => {
  const { type, payload } = action;
  switch (type) {
    // auth
    case UNAUTH_ADMIN:
      return initialValues;
    case ADD_ITEM_IN_ACTIVE_CHATROOM_LIST:
      return Object.assign({}, state, { activeChatroomList: state.activeChatroomList.concat([payload]) });
    case ADD_ITEM_IN_CHATROOM:
      return Object.assign({}, state, { chatroomList: state.chatroomList.slice(0, payload.index).concat(Object.assign({}, state.chatroomList[payload.index], { chats: state.chatroomList[payload.index].chats.concat([payload.item]) }), state.chatroomList.slice(payload.index + 1, state.chatroomList.length)) });
    case REMOVE_ITEM_IN_ACTIVE_CHATROOM_LIST:
      return Object.assign({}, state, { activeChatroomList: state.activeChatroomList.slice(0, payload.index).concat(state.activeChatroomList.slice(payload.index + 1, state.activeChatroomList.length)) });
    case UPDATE_CHATROOMS_META:
      return Object.assign({}, state, { chatroomsMeta: Object.assign({}, state.chatroomsMeta, payload) });
    case UPDATE_ITEM_IN_ACTIVE_CHATROOM_LIST:
      return Object.assign({}, state, { activeChatroomList: state.activeChatroomList.slice(0, payload.index).concat([Object.assign({}, state.activeChatroomList[payload.index], payload.item)], state.activeChatroomList.slice(payload.index + 1, state.activeChatroomList.length)) });
    default:
      return state;
  }
};

export default chatroomsReducer;
