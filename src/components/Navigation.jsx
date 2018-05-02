import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';
import Header from './Header';
// import SideBar from 'SideBar';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  componentWillMount() {
    const { selectedProject, list } = this.props.projects;
    const pathnames = this.props.location.pathname.split('/');
    if (pathnames.length > 1 && !selectedProject.id) {
      console.log('get selectedProject');
      console.log('pathnames[1]', pathnames[1]);
      const filteredProject = list.filter(project => project.id === pathnames[1])[0];
      if (filteredProject) {
        this.props.selectProject(filteredProject);
      }
    } else if (pathnames.length > 1 && selectedProject.id && pathnames[1] !== selectedProject.id) {
      const filteredProject = list.filter(project => project.id === pathnames[1])[0];
      if (filteredProject) {
        this.props.selectProject(filteredProject);
      }
    }
  }
  handleLogoutClick() {
    this.props.logoutAdmin();
  }
  handleMenuClick() {
    this.props.toggleMenu();
  }
  render() {
    if (!this.props.authenticated) return <div />;
    const { pathname } = this.props.location;
    // const pathnames = pathname.split('/');
    // const headerVisible = pathnames.length > 1 && pathnames[1].toLowerCase() === 'project';
    const headerVisible = true;
    // const sidebarVisible = pathname.split('/').length > 2;
    // const sidebarVisible = false;
    const { extraHeaderTitles, isLoading, isMenuVisible, location, menuSections, authUser, project } = this.props;
    return (
      <div>
        {headerVisible && <Header
          authUser={authUser}
          extraHeaderTitles={extraHeaderTitles}
          isLoading={isLoading}
          isMenuVisible={isMenuVisible}
          location={location}
          menuSections={menuSections}
          onLogoutClick={this.handleLogoutClick}
          onMenuClick={this.handleMenuClick}
          project={project}
        />}
        {/* {sidebarVisible && <SideBar
          authUser={authUser}
          extraHeaderTitles={extraHeaderTitles}
          isVisible={isMenuVisible}
          location={location}
          menuSections={menuSections}
        />} */}
      </div>
    );
  }
}

Navigation = connect(state => ({
  authenticated: state.auth.authenticated,
  authUser: state.auth.user,
  extraHeaderTitles: state.meta.nav.extraHeaderTitles,
  isLoading: state.meta.isLoading,
  isMenuVisible: state.meta.isMenuVisible,
  menuSections: state.meta.nav.menuSections,
  projects: state.projects,
}), actions)(Navigation);

export default Navigation;
