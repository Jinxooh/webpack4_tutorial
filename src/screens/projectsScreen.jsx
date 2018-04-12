import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

class Projects extends Component {
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
    const { projects } = this.props;
    const actionItems = [
      { icon: 'lightbulb_outline', title: 'Learn more' },
      { icon: 'view_headline', title: 'Documentation' },
      { icon: 'chat_bubble_outline', title: 'Supports' },
    ];
    return (
      <div className="projects" style={{ minHeight: window.innerHeight - 74 }}>
        <div className="projects-container">
          {/* <div className="projects-info">
            <h1>Welcome to SDN Console!</h1>
            <p>Tools from Standard Networks for developing great apps, engaging with your users and earning more through mobile ads.</p>
            <div className="projects-actions-container">
              <div style={{ display: 'flex' }}>
                {actionItems.map(actionItem => this.renderActionItem(actionItem))}
              </div>
              <div style={{ flex: 1 }} />
            </div>

          </div> */}
          <div className="projects-header">
            Projects
          </div>
          <div className="projects-list">
            {this.renderNewProject()}
            {projects.list.map(project => this.renderProject(project))}
          </div>
        </div>
      </div>
    );
  }
}
Projects = connect(state => ({
  projects: state.projects,
  selectedProject: state.projects.selectedProject,
}), actions)(Projects);

export default Projects;
