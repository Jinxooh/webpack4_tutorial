import React, { Component } from 'react';
import Switch from 'react-switch';
import { connect } from 'react-redux';
import actions from 'actions';

class ProjectDashboardScreen extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({ checked });
  }
  renderDefaultTable(type) {
    const pathnames = this.props.location.pathname.split('/');
    const defaultRoute = `/${pathnames[1]}/${pathnames[2]}`;
    return (
      <table>
        <thead>
          <tr>
            {['Name', 'SID', 'Created Date', 'Modified Date', 'In Use', 'Logs'].map(item =>
              (<th key={item}>
                {item}
              </th>),
            )}
          </tr>
        </thead>
        <tbody>
          {new Array(2).fill(undefined).map((item, index) => {
            return (
              <tr key={index}>
                <td><button className="automate-intent-name" onClick={() => this.props.pushRoute(`${defaultRoute}/default/${type}/111}`)}>{index === 0 ? 'Greeting' : 'Undefined'}</button>
                </td>
                {['FWfbae435bb0956f5334bbbe4aecfa5f56', '2018-03-14', '2018-03-15', 'Yes', 'Logs'].map(item =>
                  (<td key={item}>
                    {item}
                  </td>),
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  renderIntentsTable(type) {
    const pathnames = this.props.location.pathname.split('/');
    const defaultRoute = `/${pathnames[1]}/${pathnames[2]}`;
    return (
      <table>
        <thead>
          <tr>
            {['Name', 'SID', 'Created Date', 'Modified Date', 'In Use', 'Logs'].map(item =>
              (<th key={item}>
                {item}
              </th>),
            )}
          </tr>
        </thead>
        <tbody>
          {new Array(3).fill(undefined).map((item, index) => {
            return (
              <tr key={index}>
                <td><button className="automate-intent-name" onClick={() => this.props.pushRoute(`${defaultRoute}/automate/${type}/111}`)}>{`${type} ${index}`}</button>
                </td>
                {['FWfbae435bb0956f5334bbbe4aecfa5f56', '2018-03-14', '2018-03-15', 'Yes', 'Logs'].map(item =>
                  (<td key={item}>
                    {item}
                  </td>),
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  renderMenuItem(menuItem, index) {
    return (
      <div className="service-box" key={menuItem.title}>
        <div className="service-container">
          <div className="top">
            <img alt="default" src={require('img_project_service_default.png')} />
          </div>
          <div className="bottom">
            <div className="title">
              {menuItem.title}
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="actions">
              <button className="learn-more">Learn More</button>
              <div className="right">
                <div className="text">
                  Quick Link
                </div>
                <Switch
                  onChange={() => this.props.toggleProjectMenuItem(!menuItem.isVisible, index + 1)}
                  checked={menuItem.isVisible}
                  onColor="#1BA0EE"
                  checkedIcon={false}
                  uncheckedIcon={false}
                  id="normal-switch"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="project-dashboard">
        <div className="dashboard-container">
          <p style={{ fontWeight: 600, fontSize: 18, color: '#333', padding: '0 10px', marginTop: 10 }}>
            Project
          </p>
          <img alt="stats" src={require('img_project_dashboard_stats.png')} style={{ width: '100%', padding: 10 }} />
          <p style={{ fontWeight: 600, fontSize: 18, color: '#333', padding: '0 10px', marginTop: 10 }}>
            Services
          </p>
          <div className="services-container">
            {this.props.projectMenuItems.filter(item => item.title !== 'Dashboard').map((menuItem, index) => this.renderMenuItem(menuItem, index))}
          </div>
        </div>
      </div>
    );
  }
}

ProjectDashboardScreen = connect(state => ({
  projects: state.projects,
  selectedProject: state.projects.selectedProject,
  projectMenuItems: state.meta.projectMenuItems,
}), actions)(ProjectDashboardScreen);

export default ProjectDashboardScreen;
