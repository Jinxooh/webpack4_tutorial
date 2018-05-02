import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Navigation,
  Login,
  Modal,
  Apis,
  Automate,
  Campaigns,
  Channels,
  Chatrooms,
  Clients,
  Projects,
  ProjectBusiness,
  ProjectDashboard,
  ProjectSettings,
  Products,
  Intelligence,
  Intent,
  Flow,
  Dashboard,
  Credentials, CredentialsDashboard,
  CredentialsUsers, CredentialsGroups, CredentialsRoles,
  CredentialsAddUser, CredentialsCreateGroup, CredentialsCreateRole,
  CredentialsRoleSummary, CredentialsGroupSummary, CredentialsUserSummary,
  Guide,
} from 'screens';

const App = () => (
  <div>
    <Route exact path="/login" component={Login} />
    <Route path="/" component={Navigation} />
    <Route path="/" component={Modal} />
    <Route path="/credentials" component={Credentials} />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/apis" component={Apis} />
      
      <Route exact path="/projects" component={Projects} />

      <Route exact path="/guide" component={Guide} />

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

      <Route exact path="/credentials" component={CredentialsDashboard} />
      <Route exact path="/credentials/users" component={CredentialsUsers} />
      <Route exact path="/credentials/groups" component={CredentialsGroups} />
      <Route exact path="/credentials/roles" component={CredentialsRoles} />
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
