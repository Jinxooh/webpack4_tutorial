import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';
import { CredentialsActions } from '../../../store/actionCreators';

import {
  CredentialsHeader,
  CredentialsTable,
  CredentialsFilter,
  CredentialsButtons,
} from '../Credentials';
import Responsive from '../Responsive';

class CredentialsContainer extends Component {
  componentDidMount() {
    this.handleFilter();
  }

  componentWillReceiveProps(nextProps) {
    this.handleDisableButton(nextProps.filteredList);
  }

  handleDisableButton = (list) => {
    const checked = list && list.filter(item => item.checked === true);
    if (checked) CredentialsActions.disableButton(!checked.length > 0);
  }

  handleFilter = (filterName) => {
    const { datalist } = this.props;
    const list = filterName && datalist.filter(t => t.username.indexOf(filterName) !== -1);
    CredentialsActions.getList(list || datalist);
  }

  handleChange = e => this.handleFilter(e.target.value);

  handleAllCheckButton = e => CredentialsActions.updateCheckboxAll({ checked: e.target.checked });

  handleCheckBox = (e, id) => CredentialsActions.updateCheckbox({ id, checked: e.target.checked });

  render() {
    const {
      type,
      defaultRoute,

      filteredList,
      isDisable,
      pushRoute,
      deleteTableItems,
    } = this.props;

    const {
      handleChange,
      handleAllCheckButton,
      handleCheckBox,
    } = this;

    const credentialsConfigs = {
      users: {
        columTitles: ['User Name', 'SID', 'Created Date', 'Modified Date', 'In Use', 'Logs'],
        columTitleNames: ['userName', 'sid', 'createdDate', 'modifiedDate', 'inuse', 'logs'],
        leftSide: (
          <div className="left-side">
            <CredentialsButtons type="addUser" onClick={() => pushRoute(`${defaultRoute}/addUser`)} />
            <CredentialsButtons type="deleteUser" onClick={() => CredentialsActions.deleteItems({ screenName: `${type}` })} disabled={isDisable} />
          </div>
        ),
        rightSide: (
          <div className="right-side">
            <CredentialsButtons type="cached" />
            <CredentialsButtons type="settings" />
            <CredentialsButtons type="help" />
          </div>
        ),
      },
      groups: {
        columTitles: ['Group Name', 'Users', 'Inline Policy', 'Creation Time'],
        columTitleNames: ['groupName', 'users', 'inlinePolicy', 'creationTime'],
        leftSide: (
          <div className="left-side">
            <CredentialsButtons type="createGroup" onClick={() => pushRoute(`${defaultRoute}/createGroup`)} />
            <CredentialsButtons type="groupDelete" onClick={() => deleteTableItems(`${type}`)} disabled={isDisable} />
          </div>
        ),
        rightSide: (
          <div className="right-side">
            <CredentialsButtons type="cached" />
            <CredentialsButtons type="settings" />
            <CredentialsButtons type="help" />
          </div>
        ),
      },
      roles: {
        columTitles: ['Role Name', 'Users', 'Inline Policy', 'Creation Time'],
        columTitleNames: ['roleName', 'users', 'inlinePolicy', 'creationTime'],
        leftSide: (
          <div className="left-side">
            <CredentialsButtons
              type="createRole"
              onClick={() => {
                pushRoute(`${defaultRoute}/createRole`);
                CredentialsActions.getServiceList();
              }}
            />
            <CredentialsButtons type="roleDelete" onClick={() => deleteTableItems(`${type}`)} disabled={isDisable} />
          </div>
        ),
        rightSide: (
          <div className="right-side">
            <CredentialsButtons type="cached" />
            <CredentialsButtons type="settings" />
            <CredentialsButtons type="help" />
          </div>
        ),
      },
    };

    const {
      leftSide, rightSide, columTitles, columTitleNames,
    } = credentialsConfigs[type];

    return (
      <Responsive>
        <CredentialsHeader leftSide={leftSide} rightSide={rightSide} />
        <CredentialsTable
          searchFilter={<CredentialsFilter onChange={handleChange} result={filteredList.size} />}
          columTitles={columTitles}
          columTitleNames={columTitleNames}
          items={filteredList}
          handleAllCheckButton={handleAllCheckButton}
          handleCheckBox={handleCheckBox}
          pushRoute={pushRoute}
          defaultRoute={defaultRoute}
        />
      </Responsive>
    );
  }
}

export default connect(({ credentials }) => ({
  filteredList: credentials.filteredList,
  isDisable: credentials.isDisable,
}), actions)(CredentialsContainer);
