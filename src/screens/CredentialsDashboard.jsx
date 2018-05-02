import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';
import Responsive from 'components/common/Responsive';
import withLocale from 'libs/hoc/withLocale';
import Clipboard from 'react-clipboard.js';

class CredentialsDashboard extends Component {
  state = {
    url: 'https://jeckson.synology.me',
  }

  render() {
    const { url } = this.state;
    const {
      localize,
      pushRoute,

      userlist,
      grouplist,
      rolelist,
    } = this.props;
    return (
      <Responsive>
        <div>
          <div className="credentials-dashboard">
            <div className="title">{localize.cd_dashboard_title}</div>
            <div className="content">
              <div className="login-link-title">{localize.cd_dashboard_login_link}:</div>
              <div className="login-link">
                <div>{url}
                  <Clipboard data-clipboard-text={url}>
                    <i className="material-icons">content_copy</i>
                  </Clipboard>
                </div>
                <span className="link">{localize.cd_dashboard_login_link_customize}</span>
              </div>
            </div>
            <div className="sub-title">{localize.cd_dashboard_subtitle}</div>
            <div className="content">
              <div onClick={() => pushRoute('/credentials/users')}>{localize.cd_user}: <span className="link">{userlist.length}</span></div>
              <div onClick={() => pushRoute('/credentials/roles')}>{localize.cd_role}: <span className="link">{grouplist.length}</span></div>
              <div onClick={() => pushRoute('/credentials/groups')}>{localize.cd_group}: <span className="link">{rolelist.length}</span></div>
            </div>
          </div>
        </div>
      </Responsive>
    );
  }
}

CredentialsDashboard = connect(state => ({
  userlist: state.credentials.users.list,
  grouplist: state.credentials.groups.list,
  rolelist: state.credentials.roles.list,
}), actions)(CredentialsDashboard);

export default withLocale(CredentialsDashboard);
