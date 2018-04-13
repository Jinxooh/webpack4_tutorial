import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'helpers/Loadable';
// import Loadable from 'react-loadable';

import Navigation from 'Navigation';
import Login from 'Login';
import Modal from 'Modal';

import Apis from 'screens/ApisScreen';
import Automate from 'screens/AutomateScreen';
import Campaigns from 'screens/CampaignsScreen';
import Channels from 'screens/ChannelsScreen';
import Chatrooms from 'screens/ChatroomsScreen';
import Clients from 'screens/ClientsScreen';
import Projects from 'screens/projectsScreen';
import ProjectBusiness from 'screens/ProjectBusinessScreen';
import ProjectDashboard from 'screens/ProjectDashboardScreen';
import ProjectSettings from 'screens/ProjectSettingsScreen';
import Products from 'screens/ProductsScreen';
import Intelligence from 'screens/IntelligenceScreen';
import Intent from 'screens/IntentScreen';
import Flow from 'screens/FlowScreen';
import CredentialsAddUser from 'screens/CredentialsAddUserScreen';
import CredentialsCreateGroup from 'screens/CredentialsCreateGroupScreen';
import CredentialsCreateRole from 'screens/CredentialsCreateRoleScreen';
import CredentialsRoleSummary from 'screens/CredentialsRoleSummaryScreen';
import CredentialsGroupSummary from 'screens/CredentialsGroupSummaryScreen';
import CredentialsUserSummary from 'screens/CredentialsUserSummaryScreen';

const AsyncDashboard = Loadable({
  loader: () => import(/* webpackChunkName: "Dashboard" */ 'screens/Dashboard'),
});

const AsyncCredentials = Loadable({
  loader: () => import(/* webpackChunkName: "Credentials" */ 'screens/Credentials'),
});

const AsyncCredentialsUsers = Loadable({
  loader: () => import(/* webpackChunkName: "CredentialsUsers" */ 'screens/CredentialsUsers'),
});

const AsyncCredentialsGroups = Loadable({
  loader: () => import(/* webpackChunkName: "CredentialsGroups" */ 'screens/CredentialsGroups'),
});

const AsyncCredentialsRoles = Loadable({
  loader: () => import(/* webpackChunkName: "CredentialsRoles" */ 'screens/CredentialsRoles'),
});

const AsyncProjects = Loadable({
  loader: () => import(/* webpackChunkName: "CredentialsRoles" */ 'screens/projectsScreen'),
});

const App = () => (
  <div>
    <Route exact path="/login" component={Login} />
    <Route path="/" component={Navigation} />
    <Route path="/" component={Modal} />
    <Route path="/credentials" component={AsyncCredentials} />
    <Switch>
      <Route exact path="/" component={AsyncDashboard} />
      <Route exact path="/apis" component={Apis} />
      <Route exact path="/credentials/users" component={AsyncCredentialsUsers} />
      <Route exact path="/credentials/groups" component={AsyncCredentialsGroups} />
      <Route exact path="/credentials/roles" component={AsyncCredentialsRoles} />
      <Route exact path="/projects" component={AsyncProjects} />
      <Route exact path="/project/:projectId/automate" component={Automate} />
      <Route exact path="/project/:projectId/automate/intent/:intentId" component={Intent} />
      <Route exact path="/project/:projectId/automate/flow/:flowId" component={Flow} />
      <Route exact path="/project/:projectId/business" component={ProjectBusiness} />
      <Route exact path="/project/:projectId/campaigns" component={Campaigns} />
      <Route exact path="/project/:projectId/chatrooms" component={Chatrooms} />
      <Route exact path="/project/:projectId/channels" component={Channels} />
      <Route exact path="/project/:projectId/clients" component={Clients} />
      <Route exact path="/project/:projectId/dashboard" component={ProjectDashboard} />
      <Route exact path="/project/:projectId/intelligence" component={Intelligence} />
      <Route exact path="/project/:projectId/products" component={Products} />
      <Route exact path="/project/:projectId/settings" component={ProjectSettings} />

      <Route exact path="/credentials/users/addUser" component={CredentialsAddUser} />
      <Route exact path="/credentials/groups/createGroup" component={CredentialsCreateGroup} />
      <Route exact path="/credentials/roles/createRole" component={CredentialsCreateRole} />
      <Route exact path="/credentials/roles/summary/:id" component={CredentialsRoleSummary} />
      <Route exact path="/credentials/groups/summary/:id" component={CredentialsGroupSummary} />
      <Route exact path="/credentials/users/summary/:id" component={CredentialsUserSummary} />
    </Switch>
  </div>
);

export default App;
