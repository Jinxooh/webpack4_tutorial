import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

import { CredentialsContainer } from '../components/common/Credentials';

class CredentialsRoles extends Component {
  render() {
    const pathnames = this.props.location.pathname.split('/');
    const defaultRoute = `/${pathnames[1]}/${pathnames[2]}`;
    const screenName = pathnames[2];

    const {
      datalist,
    } = this.props;

    return (
      <CredentialsContainer
        datalist={datalist}
        defaultRoute={defaultRoute}
        type={screenName}
      />
    );
  }
}

export default connect(state => ({
  datalist: state.credentials.roles.list,
}), actions)(CredentialsRoles);
