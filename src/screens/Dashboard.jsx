import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';
import withLocale from 'libs/hoc/withLocale';
class Dashboard extends Component {
  renderProject(project) {
    return (
      <div className="project-item" key={project.name}>
        <button className="project-item-container" onClick={() => this.props.selectProject(project)}>
          <h3>{project.name}</h3>
        </button>
      </div>
    );
  }
  renderNewProject() {
    return (
      <div className="project-item">
        <button className="project-item-container new" onClick={() => {}}>
          <i className="material-icons">add</i>
          <div>Add project</div>
        </button>
      </div>
    );
  }
  renderActionItem(actionItem) {
    return (
      <button className="project-action-item" key={actionItem.icon}>
        <i className="material-icons">{actionItem.icon}</i>
        <p>{actionItem.title}</p>
      </button>
    );
  }
  render() {
    const { projects, localize } = this.props;
    const {
      learnMore, documentataion, supports, welcomeTitle, welcomeSubTitle,
    } = localize;
    // console.log(localize.getLanguage());

    const actionItems = [
      { icon: 'lightbulb_outline', title: learnMore },
      { icon: 'view_headline', title: documentataion },
      { icon: 'chat_bubble_outline', title: supports },
    ];
    return (
      <div className="projects" style={{ minHeight: window.innerHeight - 74 }}>
        <div className="projects-container">
          <div className="projects-info">
            <h1>{welcomeTitle}</h1>
            <p>{welcomeSubTitle}</p>
            <div className="projects-actions-container">
              <div style={{ display: 'flex' }}>
                {actionItems.map(actionItem => this.renderActionItem(actionItem))}
              </div>
              <div style={{ flex: 1 }} />
            </div>

          </div>
          <div className="projects-header">
            <div>Projects</div>
            <button onClick={() => this.props.pushRoute('/projects')}>More</button>
          </div>
          <div className="projects-list">
            {this.renderNewProject()}
            {projects.list.slice(0, 5).map(project => this.renderProject(project))}
          </div>
        </div>
      </div>
    );
  }
}
Dashboard = connect(state => ({
  projects: state.projects,
  selectedProject: state.projects.selectedProject,
}), actions)(Dashboard);

export default withLocale(Dashboard);
