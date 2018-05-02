import React from 'react';
import cx from 'classnames';

const Tab = ({
  children, selected, onTabClick, listIndex,
}) => {
  return (
    <div className="tab">
      <button className={cx({ selected })} onClick={() => onTabClick(listIndex)} >
        {children}
      </button>
    </div>
  );
};


export default Tab;
