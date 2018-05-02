import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

import Responsive from '../Responsive';
import SummaryLabel from './SummaryLabel';
import { Tab, TabList, TabPanel, Tabs } from '../Tabs';
import Button from '../Button';
import { CredentialsActions } from '../../../store/actionCreators';

class SummaryContainer extends Component {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick(screenName, id) {
    const { pushRoute, defaultRoute } = this.props;
    console.log('onDelete Click', screenName, id);
    CredentialsActions.deleteSummary({ screenName, id });
    pushRoute(defaultRoute);
  }

  render() {
    const { onDeleteClick } = this;
    const { item, type } = this.props;
    const config = {
      roles: ['serviceList'],
      groups: ['projectList'],
      users: ['roleList', 'groupList'],
    };

    const keys = item && Object.keys(item);
    const testRender = (
      <Tabs>
        <TabList>
          <Tab>111</Tab>
          <Tab>222</Tab>
          <Tab>333</Tab>
        </TabList>
        <TabPanel>123</TabPanel>
        <TabPanel>456</TabPanel>
        <TabPanel>789</TabPanel>
      </Tabs>
    );

    const tabRender = (
      <Tabs>
        <TabList>
          { config[type] && config[type].map((val, idx) => <Tab key={idx}>{val}</Tab>)}
        </TabList>
        { config[type] && config[type].map((val, idx) => (
          <TabPanel key={idx}>
            <table>
              <thead>
                <tr>
                  { item && item[val][0] && Object.keys(item[val][0]).map((key, keyIndex) => {
                    return <th key={keyIndex}>{key}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                { item && item[val] && item[val].map((item, idx) => {
                  return (
                    <tr key={idx}>
                      { Object.keys(item).map((t, i) => {
                        let convert = null;
                        if (item[t] instanceof Object) convert = item[t].toString();
                        if (item[t] instanceof Date) convert = item[t].toDateString();
                        if (typeof item[t] === 'boolean') convert = item[t] ? 'True' : 'False';
                        return <td key={i} className={convert}>{convert || item[t]}</td>;
                      })}
                    </tr>);
                })}
              </tbody>
            </table>
          </TabPanel>),
        )}
      </Tabs>
    );

    return (
      <Responsive>
        <div className="summary-container">
          <div className="title">
            <h1>Summary</h1>
            <Button onClick={() => onDeleteClick(type, item.id)} buttonName={`delete ${type}`} />
          </div>
          <div className="quotes">
            This service-linked role cannot be modified in IAM. You can modify this role from the AWS service that depends on this role. Learn more
          </div>
          {
            keys ? <div>
              {keys.map((val, idx) => {
                if (!config[type].findIndex(t => t === val)) return null;
                return <SummaryLabel key={idx} labelName={val} labelData={item[val]} />;
              })}
              </div>
              : <div>No {type} data</div>
            }
          {tabRender}
        </div>
      </Responsive>
    );
  }
}

export default connect(({ credentials }) => ({
  credentials,
}), actions)(SummaryContainer);
