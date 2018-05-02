import * as authActions from './authActions';
import * as automateActions from './automateActions';
import * as chatroomsActions from './chatroomsActions';
import * as projectsActions from './projectsActions';
import * as groupChatsActions from './groupChatsActions';
import * as metaActions from './metaActions';
import * as modalActions from './modalActions';
import * as propertiesActions from './propertiesActions';
import * as usersActions from './usersActions';
import * as restaurantsActions from './actionHelpers';

const actions = {
  ...automateActions,
  ...chatroomsActions,
  ...projectsActions,
  ...authActions,
  ...groupChatsActions,
  ...metaActions,
  ...modalActions,
  ...propertiesActions,
  ...restaurantsActions,
  ...usersActions,
};

export default actions;
