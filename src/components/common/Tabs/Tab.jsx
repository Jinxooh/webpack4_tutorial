import React from 'react';
import cx from 'classnames';

const Tab = ({ children, selected, onTabClick, listIndex }) => {
  return (
    <div className="tab">
      <a className={cx({ selected })} onClick={() => onTabClick(listIndex)} >{children}</a>
    </div>
  );
};

export default Tab;
