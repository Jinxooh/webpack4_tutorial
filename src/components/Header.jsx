import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';
import { SettingsActions } from 'store/actionCreators';
import withLocale from 'libs/hoc/withLocale';

class Header extends Component {
  changeLocale = (locale) => {
    SettingsActions.changeLocale(locale);
  }

  renderProjectMenuItem = (menuItem) => {
    const pathnames = this.props.location.pathname.split('/');
    if (pathnames.length < 4) return <div />;
    const menu = pathnames[3];

    return menuItem.map(({ icon, title, pathName }) => {
      const path = pathName ? pathName.toLowerCase() : title.toLowerCase();
      const targetRoute = `/${pathnames[1]}/${pathnames[2]}/${path}`;
      return (
        <button className={`header-item ${menu === title.toLowerCase() ? 'selected' : ''}`} key={title} onClick={() => this.props.pushRoute(targetRoute)}>
          <i className="material-icons">{icon}</i>
          <p>{title}</p>
        </button>
      );
    });
  }

  renderMainMenuItem = (menuItem) => {
    const pathnames = this.props.location.pathname.split('/');
    if (this.props.location.pathname !== '/' && !['credentials', 'projects', 'apis', 'guide'].includes(pathnames[1].toLowerCase())) return <div />;
    const menu = pathnames[1];

    return menuItem.map(({ icon, title, pathName }) => (
      <button className={`header-item ${menu === title.toLowerCase() ? 'selected' : ''}`} key={title} onClick={() => this.props.pushRoute(pathName === 'home' ? '/' : `/${pathName.toLowerCase()}`)}>
        <i className="material-icons">{icon}</i>
        <p>{title}</p>
      </button>
    ));
  }

  render() {
    const { authUser, location, selectedProject, locale, localize } = this.props;
    const {
      renderMainMenuItem, renderProjectMenuItem, changeLocale,
    } = this;
    const { pathname } = this.props.location;
    const pathnames = pathname.split('/');

    const displayProjectName = pathnames.length > 2 && selectedProject && selectedProject.id;

    const {
      headerTitle, home, projects, apis, credentials, guide
    } = localize;

    const mainMenuItems = [
      { icon: 'home', title: home, pathName: 'home' },
      { icon: 'apps', title: projects, pathName: 'projects' },
      { icon: 'code', title: apis, pathName: 'apis' },
      { icon: 'account_circle', title: credentials, pathName: 'credentials' },
      { icon: 'code', title: guide, pathName: 'guide' },
    ];
    const projectMenuItems = this.props.projectMenuItems.filter(item => item.isVisible);

    return (
      <div className="header">
        <button className="header-logo" onClick={() => this.props.pushRoute('/')}>Logo</button>
        <div className="header-content">
          <div className="header-top">
            <div className="header-left">
              {displayProjectName && <div className="header-project">
                <button className="header-back-button" onClick={() => this.props.pushRoute('/')}>
                  <i className="material-icons">arrow_back</i>
                </button>
                <div className="header-project-title">
                  {selectedProject.name}
                </div>
              </div>}
              {!displayProjectName && <div className="header-project-title">
                {headerTitle}
              </div>}
            </div>
            <div className="header-right">
              <div className="dropdown">
                <button>{locale}<i className="material-icons">arrow_drop_down</i></button>
                <div className="dropdown-content">
                  <div onClick={() => { changeLocale('en'); }}><span role="img">🇺🇸</span> English</div>
                  <div onClick={() => { changeLocale('ko'); }}><span role="img">🇰🇷</span> 한글</div>
                </div>
              </div>
              <div className="dropdown">
                <button>Docs<i className="material-icons">arrow_drop_down</i></button>
              </div>
              <div className="dropdown">
                <button>hanyoup cho<i className="material-icons">arrow_drop_down</i>
                </button>
                <div className="dropdown-content">
                  <a href="#">My Account</a>
                  <a href="#">My Organization</a>
                  <a href="#">My Billing Dashboard</a>
                  <a href="#">My security Credentials</a>
                  <a href="#">Logout</a>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-left">
              {renderMainMenuItem(mainMenuItems)}
              {renderProjectMenuItem(projectMenuItems)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header = connect(state => ({
  authenticated: state.auth.authenticated,
  authUser: state.auth.user,
  extraHeaderTitles: state.meta.nav.extraHeaderTitles,
  isLoading: state.meta.isLoading,
  isMenuVisible: state.meta.isMenuVisible,
  menuSections: state.meta.nav.menuSections,
  projects: state.projects,
  selectedProject: state.projects.selectedProject,
  projectMenuItems: state.meta.projectMenuItems,
}), actions)(Header);

export default withLocale(Header);
