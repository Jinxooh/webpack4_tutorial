import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import { animateScroll, Element, scroller } from 'react-scroll';
import Rnd from 'react-rnd';
import { connect } from 'react-redux';
import actions from 'actions';
import { dateFormatter } from '../helpers/formatHelper';

const uuidv4 = require('uuid/v4');

class ChatroomsScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('componentDidMount');
    const { activeChatroomList } = this.props.chatrooms;
    setTimeout(() => {
      activeChatroomList.forEach(room => scroller.scrollTo(`${room.id}-lastchat`, { duration: 0, smooth: false, offset: 100, containerId: `container-room-id-${room.id}` }));
    }, 50);
  }
  sendTextChat(text, roomId) {
    if (!text) return;
    const { authUser, chatrooms: { chatroomList } } = this.props;
    const id = chatroomList.filter(room => room.id === roomId)[0].chats.length;
    this.props.addItemInChatroom({ id, type: 'text', senderId: authUser.id, text, timestamp: new Date().getTime() }, roomId, () => {
      const index = this.props.chatrooms.activeChatroomList.findIndex(room => room.id === roomId);
      if (index !== -1) {
        this.props.updateItemInActiveChatroomList({ text: '' }, index);
      }
      scroller.scrollTo(`${roomId}-lastchat`, { duration: 250, smooth: true, offset: 100, containerId: `container-room-id-${roomId}` });
    });
  }
  renderHeader() {
    return (
      <div className="chatrooms-header">
        <div className="left">
          Closer 서비스 참조
        </div>
        <div className="right">
          <button><img alt="menu" src={require('ic_hamburger_menu_black.png')} /></button>
        </div>
      </div>
    );
  }
  renderSidebar() {
    const { chatroomList } = this.props.chatrooms;
    return (
      <div className="chatrooms-sidebar">
        {chatroomList.map((chatroom) => {
          const lastChat = chatroom.chats[chatroom.chats.length - 1];
          return (
            <button className="chatroom" key={chatroom.id} onClick={() => this.props.addItemInActiveChatroomList(chatroom.id)}>
              <div className="profile-area">
                <img alt="profile" src={require('img_profile_placeholder.png')} />
              </div>
              <div className="content-area">
                <div className="name">
                  {chatroom.user.name}
                </div>
                <div className="text">
                  {lastChat.text}
                </div>
              </div>
              <div className="info-area">
                <div className="date">
                  {dateFormatter(new Date(lastChat.timestamp), 'MM-DD')}
                </div>
                <div className="time">
                  {dateFormatter(new Date(lastChat.timestamp), 'HH:MM')}
                </div>
                <div className="unread">
                  1
                </div>
              </div>
            </button>);
        })}
      </div>
    );
  }
  renderToolBar() {
    const style = { zIndex: 1, cursor: 'default' };
    const { chatroomsMeta: { toolBar } } = this.props.chatrooms;
    return (
      <div className="chatrooms-toolbar">
        toolbar
      </div>
    );
    // return (
    //   <Rnd
    //     style={style}
    //     className="chatrooms-toolbar"
    //     size={{ width: toolBar.width, height: toolBar.height }}
    //     position={{ x: toolBar.x, y: toolBar.y }}
    //     onDragStop={(e, d) => this.props.updateChatroomsMeta({ toolBar: Object.assign({}, toolBar, { x: d.x, y: d.y }) })}
    //     onResize={(e, direction, ref, delta, position) => this.props.updateChatroomsMeta({ toolBar: Object.assign({}, toolBar, { width: ref.offsetWidth, height: ref.offsetHeight, ...position }) })}
    //   >
    //     toolbar
    //   </Rnd>
    // );
  }
  renderActiveChatroom(activeChatroom, index) {
    const { authUser } = this.props;
    const { chatroomList, chatroomsMeta: { activeChatroomIndex } } = this.props.chatrooms;
    const chatroom = chatroomList.filter(room => room.id === activeChatroom.id)[0];
    if (!chatroom) return <div />;

    const isActive = index === activeChatroomIndex;
    const style = { zIndex: index === activeChatroomIndex ? 1 : 0, cursor: 'default' };
    const logo = { web: require('ic_chatroom_type_web.png'), kakao: require('ic_chatroom_type_kakaotalk.png'), facebook: require('ic_chatroom_type_facebook_messenger.png') }[chatroom.type];

    return (
      <Rnd
        key={chatroom.id}
        style={style}
        className="chatroom"
        enableUserSelectHack={false}
        size={{ width: activeChatroom.width, height: activeChatroom.height }}
        position={{ x: activeChatroom.x, y: activeChatroom.y }}
        onDragStart={() => this.props.updateChatroomsMeta({ activeChatroomIndex: index })}
        onDragStop={(e, d) => this.props.updateItemInActiveChatroomList({ x: d.x, y: d.y }, index)}
        onResize={(e, direction, ref, delta, position) => this.props.updateItemInActiveChatroomList({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          ...position,
        }, index)}
      >
        <div className="chatroom-header">
          <div className="top">
            <img alt="logo" className="logo" src={logo} />
            <div className="title">
              {chatroom.id}
            </div>
            <button className="close" onClick={() => this.props.removeItemInActiveChatroomList(index)}><img alt="close" src={require('ic_cancel_black.png')} /></button>
          </div>
          <div className="bottom">
            bottom
          </div>
        </div>
        <div className={`chatroom-content ${isActive ? 'active' : ''}`} id={`container-room-id-${chatroom.id}`}>
          {chatroom.chats.map((chat, chatIndex) => {
            const isMyChat = chat.senderId === authUser.id;
            const isLastChat = chatIndex === chatroom.chats.length - 1;
            return (
              <div className={`chat-container ${isMyChat ? 'mine' : ''}`} key={chat.id}>
                <button className={`chat-text ${isMyChat ? 'mine' : ''}`}>
                  {chat.text}
                </button>
                {isLastChat && <Element name={`${chatroom.id}-lastchat`} />}
              </div>
            );
          })}
        </div>
        <div className="chatroom-bottom">
          {!activeChatroom.isEntered && <button className="enter" onClick={() => this.props.updateItemInActiveChatroomList({ isEntered: true }, index)}>참여하기</button>}
          {activeChatroom.isEntered && <div className="input-container">
            <Textarea maxRows={3} style={{ minHeight: 34 }} value={activeChatroom.text} onChange={e => this.props.updateItemInActiveChatroomList({ text: e.target.value }, index)} />
            <button className="send" onClick={() => this.sendTextChat(activeChatroom.text, chatroom.id)}>전송</button>
          </div>}
        </div>
      </Rnd>
    );
  }
  render() {
    const { activeChatroomList } = this.props.chatrooms;
    return (
      <div className="chatrooms">
        {this.renderHeader()}
        {this.renderSidebar()}
        <div className="main">
          {activeChatroomList.map((room, index) => this.renderActiveChatroom(room, index))}
        </div>
        {this.renderToolBar()}
      </div>
    );
  }
}

ChatroomsScreen = connect(state => ({
  authUser: state.auth.user,
  chatrooms: state.chatrooms,
}), actions)(ChatroomsScreen);

export default ChatroomsScreen;
