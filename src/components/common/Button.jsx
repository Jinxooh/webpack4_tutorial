import React from 'react';
import cx from 'classnames';

const Button = ({ onClick, buttonName, color, icon, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={cx('common', 'button', color)}
      {...rest}
    >{ buttonName || (<i className="material-icons">{icon}</i>)}</button>
  );
};

export default Button;
