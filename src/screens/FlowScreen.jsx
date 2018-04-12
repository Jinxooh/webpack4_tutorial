import React from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

import Sidebar from '../components/Sidebar';

class FlowScreen extends React.Component {
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
  render() {
    return (
      <div className="intent">
        <Sidebar items={[{ title: 'New Flow' }, { title: 'group1' }, { title: 'group2' }, { title: 'group3' }]} location={this.props.location} onClick={() => {}} />
        <div className="">
          <p>screen shot from twilio studio</p><br />
          <img style={{ width: '100%' }} alt="amazon_lex_intent" src={require('img_twilio_studio.png')} />
        </div>
      </div>
    );
  }
}

FlowScreen = connect(state => ({
  authenticated: state.auth.authenticated,
  authUser: state.auth.user,
  extraHeaderTitles: state.meta.nav.extraHeaderTitles,
  isLoading: state.meta.isLoading,
  isMenuVisible: state.meta.isMenuVisible,
  menuSections: state.meta.nav.menuSections,
  projects: state.projects,
  selectedProject: state.projects.selectedProject,
}), actions)(FlowScreen);

export default FlowScreen;
