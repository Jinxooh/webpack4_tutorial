import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

import { SummaryContainer } from '../components/common/Summary';

class CredentialsGroupSummaryScreen extends Component {
  render() {
    const pathnames = this.props.location.pathname.split('/');
    const defaultRoute = `/${pathnames[1]}/${pathnames[2]}`;
    const screenName = pathnames[2];
    const {
      datalist,
    } = this.props;

    const { id } = this.props.match.params;
    const item = datalist && datalist.filter(t => t.id === id);

    return (
      <SummaryContainer item={item[0]} type={screenName} defaultRoute={defaultRoute} />
    );
  }
}

export default connect(state => ({
  datalist: state.credentials.groups.list,
}), actions)(CredentialsGroupSummaryScreen);
