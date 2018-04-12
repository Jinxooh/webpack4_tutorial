import React from 'react';
import cx from 'classnames';

const TabPanel = ({ children, selected }) => {
  return (
    <div className={cx('tab-panel', { selected })}>
      {selected ? children : null}
    </div>
  );
};

export default TabPanel;
