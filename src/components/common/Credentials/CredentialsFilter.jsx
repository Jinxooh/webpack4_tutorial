import React from 'react';

const CredentialsFilter = ({ onChange, result }) => {
  return (
    <div className="credentials-filter">
      <div className="filter">
        <input type="text" placeholder="Filter" onChange={onChange} />
      </div>
      <div className="result">
        {result ? `Showing ${result} results ` : 'No result' }
      </div>
    </div>
  );
};

export default CredentialsFilter;
