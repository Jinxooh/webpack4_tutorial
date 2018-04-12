import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

import { Sidebar } from '../components/Sidebar';

class CredentialsAccountSettings extends Component {
  render() {

    const sidebarItems = [
      { key: 0, type: 'link', icon: '', title: 'Dashboard', link: '/credentials' },
      { key: 1, type: 'link', icon: '', title: 'Groups', link: '/credentials/groups' },
      { key: 2, type: 'link', icon: '', title: 'Users', link: '/credentials/users' },
      { key: 4, type: 'link', icon: '', title: 'Roles', link: '/credentials/roles' },
      { key: 6, type: 'link', icon: '', title: 'Account settings', link: '/credentials/settings' },
      { key: 7, type: 'link', icon: '', title: 'Credential report', link: '/credentials/report' },
    ];

    return (
      <div>
        <Sidebar items={sidebarItems} location={this.props.location} />
        <div>
          main
        </div>
      </div>
    );
  }
}

CredentialsAccountSettings = connect(state => ({
  projects: state.projects,
  selectedProject: state.projects.selectedProject,
}), actions)(CredentialsAccountSettings);

export default CredentialsAccountSettings;
