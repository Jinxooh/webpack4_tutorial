import React from 'react';
import cx from 'classnames';

const CredentialsButtons = ({ onClick, type, disabled, ...rest }) => {
  const buttonConfigs = {
    addUser: {
      color: 'red',
      buttonName: 'Add User',
    },
    deleteUser: {
      color: 'blue',
      buttonName: 'Delete User',
    },
    createRole: {
      color: 'blue',
      buttonName: 'Create Role',
    },
    roleDelete: {
      buttonName: 'Role Delete',
    },
    createGroup: {
      color: 'blue',
      buttonName: 'Create Group',
    },
    groupDelete: {
      buttonName: 'Group Delete',
    },
    cached: {
      icon: 'settings',
    },
    settings: {
      icon: 'cached',
    },
    help: {
      icon: 'help',
    },
  };

  const {
    color, buttonName, icon,
  } = buttonConfigs[type];

  return (
    <div
      onClick={onClick}
      className={cx('common button', color, { disabled })}
      {...rest}
    >{ buttonName || (<i className="material-icons">{icon}</i>)}</div>
  );
};

export default CredentialsButtons;
