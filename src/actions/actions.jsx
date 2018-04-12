import * as authActions from 'authActions';
import * as automateActions from 'automateActions';
import * as chatroomsActions from 'chatroomsActions';
import * as projectsActions from 'projectsActions';
import * as adminMessagesActions from 'adminMessagesActions';
import * as adminsActions from 'adminsActions';
import * as bannedWordsActions from 'bannedWordsActions';
import * as cashoutRequestsActions from 'cashoutRequestsActions';
import * as cashLogsActions from 'cashLogsActions';
import * as groupChatsActions from 'groupChatsActions';
import * as metaActions from 'metaActions';
import * as modalActions from 'modalActions';
import * as moduleActions from 'moduleActions';
import * as pointLogsActions from 'pointLogsActions';
import * as photosActions from 'photosActions';
import * as photoCommentsActions from 'photoCommentsActions';
import * as propertiesActions from 'propertiesActions';
import * as purchaseLogsActions from 'purchaseLogsActions';
import * as statsActions from 'statsActions';
import * as talksActions from 'talksActions';
import * as usersActions from 'usersActions';
import * as userUpdateLogsActions from 'userUpdateLogsActions';
import * as videoChatLogsActions from 'videoChatLogsActions';
import * as restaurantsActions from 'restaurantsActions';

const actions = {
  ...automateActions,
  ...chatroomsActions,
  ...projectsActions,
  ...adminMessagesActions,
  ...adminsActions,
  ...authActions,
  ...bannedWordsActions,
  ...cashoutRequestsActions,
  ...cashLogsActions,
  ...groupChatsActions,
  ...metaActions,
  ...modalActions,
  ...moduleActions,
  ...pointLogsActions,
  ...photosActions,
  ...photoCommentsActions,
  ...propertiesActions,
  ...purchaseLogsActions,
  ...restaurantsActions,
  ...statsActions,
  ...talksActions,
  ...usersActions,
  ...userUpdateLogsActions,
  ...videoChatLogsActions,
};

export default actions;
