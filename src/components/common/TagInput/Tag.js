import React from 'react';

const Tag = ({ children, onRemove, index }) => {
  return (
    <div className="tag">
      {children}
      <i className="material-icons" onClick={e => onRemove(e, index)} >clear</i>
    </div>
  );
};

export default Tag;