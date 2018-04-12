import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

class Automate extends Component {
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
  render() {
    return (
      <div className="automate">
        <div className="automate-title-section">
          <h2>Default</h2>
        </div>
        {this.renderDefaultTable()}
        <div className="automate-title-section">
          <h2>Intents</h2>
          <button>
            <i className="material-icons">add_circle</i>
          </button>
        </div>
        {this.renderIntentsTable('intent')}
        <div style={{ height: 30 }} />
        <div className="automate-title-section">
          <h2>Flows</h2>
          <button>
            <i className="material-icons">add_circle</i>
          </button>
        </div>
        {this.renderIntentsTable('flow')}
        <div style={{ height: 30 }} />
        <div className="automate-title-section">
          <h2>Follow-Ups</h2>
          <button>
            <i className="material-icons">add_circle</i>
          </button>
        </div>
        {this.renderIntentsTable('intent')}
      </div>
    );
  }
}

Automate = connect(state => ({
  projects: state.projects,
  selectedProject: state.projects.selectedProject,
}), actions)(Automate);

export default Automate;
