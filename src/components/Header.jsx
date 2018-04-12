import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';
// base/bot/project-id/menu/id
class Header extends Component {
  renderProjectMenuItem({ icon, title }) {
    const pathnames = this.props.location.pathname.split('/');
    if (pathnames.length < 4) return <div />;
    const menu = pathnames[3];
    const targetRoute = `/${pathnames[1]}/${pathnames[2]}/${title.toLowerCase()}`;
    return (
      <button className={`header-item ${menu === title.toLowerCase() ? 'selected' : ''}`} key={title} onClick={() => this.props.pushRoute(targetRoute)}>
        <i className="material-icons">{icon}</i>
        <p>{title}</p>
      </button>
    );
  }
  renderMainMenuItem({ icon, title }) {
    const pathnames = this.props.location.pathname.split('/');
    console.log('renderMainMenuItem pathnames', pathnames);
    if (this.props.location.pathname !== '/' && !['credentials', 'projects', 'apis'].includes(pathnames[1].toLowerCase())) return <div />;
    const menu = pathnames[1];
    return (
      <button className={`header-item ${menu === title.toLowerCase() ? 'selected' : ''}`} key={title} onClick={() => this.props.pushRoute(title === 'Home' ? '/' : `/${title.toLowerCase()}`)}>
        <i className="material-icons">{icon}</i>
        <p>{title}</p>
      </button>
    );
  }
  render() {
    const { authUser, location, selectedProject } = this.props;
    console.log('location', location);
    const { pathname } = this.props.location;
    const pathnames = pathname.split('/');

    const displayProjectName = pathnames.length > 2 && selectedProject && selectedProject.id;

    const mainMenuItems = [
      { icon: 'home', title: 'Home' },
      { icon: 'apps', title: 'Projects' },
      { icon: 'code', title: 'APIs' },
      { icon: 'account_circle', title: 'Credentials' },
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
                SDN Console
              </div>}
            </div>
            <div className="header-right">
              <div className="dropdown">
                <button>English<i className="material-icons">arrow_drop_down</i></button>
              </div>
              <div className="dropdown">
                <button>Docs<i className="material-icons">arrow_drop_down</i></button>
              </div>
              <div className="dropdown">
                <button>
                  hanyoup cho
                  <i className="material-icons">arrow_drop_down</i>
                  <div className="dropdown-content">
                    <a href="#">My Account</a>
                    <a href="#">My Organization</a>
                    <a href="#">My Billing Dashboard</a>
                    <a href="#">My security Credentials</a>
                    <a href="#">Logout</a>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-left">
              {mainMenuItems.map(item => this.renderMainMenuItem(item))}
              {projectMenuItems.map(item => this.renderProjectMenuItem(item))}
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

export default Header;
