import React from 'react';

const CredentialsTable = ({
  searchFilter, handleAllCheckButton, handleCheckBox, pushRoute,
  items, columTitles, columTitleNames, defaultRoute,
}) => {
  const columTitleRender = (
    <tr>
      <th><input type="checkbox" onClick={handleAllCheckButton} /></th>
      {columTitles.map((title, i) => (<th key={i} >{title}</th>))}
    </tr>
  );

  const itemRender = (
    <tbody>
      {items ? items.map(item => (
        <tr key={item.id} >
          <td>
            <input
              type="checkbox"
              onClick={event => handleCheckBox(event, item.id)}
              checked={item.checked}
            /></td>
          {
            columTitleNames && columTitleNames.map((columName, i) => {
              if (item[columName] instanceof Date) {
                return (<td key={i}>{item[columName] && item[columName].toDateString()}</td>);
              }
              if (columName.indexOf('Name') !== -1) {
                return (<td key={i} onClick={() => pushRoute(`${defaultRoute}/summary/${item.id}`)}>{item[columName]}</td>);
              }
              return (<td key={i}>{item[columName]}</td>);
            })
          }
        </tr>)) :
      <tr>
        <td colSpan={columTitles.length}> No records found.</td>
      </tr>
      }
    </tbody>
  );

  return (
    <div className="credential-table">
      {searchFilter}
      <div className="wrapper">
        <table>
          <thead>
            {columTitleRender}
          </thead>
          {itemRender}
        </table>
      </div>
    </div>
  );
};

export default CredentialsTable;
