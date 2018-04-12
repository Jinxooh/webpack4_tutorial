import React from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

import Sidebar from '../components/Sidebar';

class CampaignsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTrigger: '',
      triggers: [
        { id: 1, value: 'aaa', isEditing: false },
        // { id: 2, value: 'bb', isEditing: false },
        // { id: 3, value: 'cccccccccc', isEditing: false },
      ],
      parameters: [],
      confirmPrompt: [],
      fulfillment: [],
      response: [],
    };
  }
  renderIntentGroup(group) {
    return (
      <div className="intent-group">

      </div>
    );
  }
  onChangeText(value, index) {
    const oldTrigger = this.state.triggers[index];
    const newTrigger = Object.assign(this.state.triggers[index], { value });
    this.setState({ triggers: this.state.triggers.slice(0, index).concat([newTrigger], this.state.triggers.slice(index + 1, this.state.triggers.length)) });
  }
  renderTrigger(trigger, index) {
    return (
      <span className="intent-section-trigger-item" key={trigger.id}>
        <textarea rows={1} cols={trigger.value.length} onChange={e => this.onChangeText(e.target.value, index)}>
          {trigger.value}
        </textarea>
      </span>
    );
  }
  renderEmptyTrigger() {
    return (
      <div className="intent-section-trigger-new-item">
        <textarea rows={1}>
          {this.state.newTrigger}
        </textarea>
      </div>
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
                <td><button className="automate-intent-name" onClick={() => this.props.pushRoute(`${defaultRoute}/campaign/${type}/111}`)}>{`${type} ${index}`}</button>
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
  render() {
    return (
      <div className="automate" style={{ marginLeft: 230 }}>
        <Sidebar items={[{ title: 'New Group' }, { title: 'group1' }, { title: 'group2' }, { title: 'group3' }]} location={this.props.location} onClick={() => {}} />
        <div className="top-container">
          <div className="buttons-container">
            <button className="new">New Campaign</button>
            <button className="actions">Actions</button>
          </div>
          <div className="buttons-container">
            <i className="material-icons" style={{ fontSize: 16, marginLeft: 10 }}>refresh</i>
            <i className="material-icons" style={{ fontSize: 16, marginLeft: 10 }}>settings</i>
            <i className="material-icons" style={{ fontSize: 16, marginLeft: 10 }}>help</i>
          </div>
        </div>
        <div className="filter-container">
          <div className="input-container">
            <i className="material-icons">search</i>
            <div className="filter-item">
              <div className="title">Name</div>
              <div className="value" style={{ marginLeft: 5, marginRight: 5 }}>:</div>
              <div className="value">campaign</div>
              <button><i className="material-icons">close</i></button>
            </div>
            <input type="text" placeholder="Add filter" />
            <i className="material-icons" style={{ color: 'gray' }}>help</i>
          </div>
          <div className="nav-container">
            <i className="material-icons">skip_previous</i>
            <i className="material-icons">keyboard_arrow_left</i>
            1 to 20 of 20
            <i className="material-icons">keyboard_arrow_right</i>
            <i className="material-icons">skip_next</i>
          </div>
        </div>
        <div className="automate-title-section">
          {this.renderIntentsTable('campaign')}
        </div>
      </div>
    );
  }
}

CampaignsScreen = connect(state => ({
  authenticated: state.auth.authenticated,
  authUser: state.auth.user,
  extraHeaderTitles: state.meta.nav.extraHeaderTitles,
  isLoading: state.meta.isLoading,
  isMenuVisible: state.meta.isMenuVisible,
  menuSections: state.meta.nav.menuSections,
  projects: state.projects,
  selectedProject: state.projects.selectedProject,
}), actions)(CampaignsScreen);

export default CampaignsScreen;
