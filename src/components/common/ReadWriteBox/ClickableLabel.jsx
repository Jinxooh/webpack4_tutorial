import React from 'react';

const ClickableLabel = ({ onClick, displayName, name, value, checked }) => {
  return (
    <div onClick={() => onClick(name, value, checked)} >{displayName}</div>
  );
};

export default ClickableLabel;
