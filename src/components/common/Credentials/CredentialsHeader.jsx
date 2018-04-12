import React from 'react';

const CredentialsHeader = ({ leftSide, rightSide }) => {
  return (
    <div className="credentials-header">
      <div className="header-wrapper">
        {leftSide}
        {rightSide}
      </div>
    </div>
  );
};

export default CredentialsHeader;
