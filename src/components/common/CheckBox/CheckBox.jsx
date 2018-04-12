import React from 'react';

const CheckBox = ({
  onChange, onClick,
  key, name, item,
}) => {
  return (
    <div className="check-box" key={key}>
      <div>
        <input type="checkbox" name={name} onChange={e => onChange(e, item)} />
      </div>
      <div>
        <strong>{name}</strong>
      </div>
    </div>
  );
};

CheckBox.defaultProps = {
  onChange: () => console.log('onChange no implement'),
  onClick: () => console.log('onClick no implement'),
};

export default CheckBox;
