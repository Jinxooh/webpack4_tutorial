import React from 'react';

const CheckBox = ({
  onChange, onClick,
  key, name, item,
}) => {
  return (
    <div className="check-box" key={key}>
      <div>
        <input id={item.id} type="checkbox" name={name} onChange={e => onChange(e, item)} />
      </div>
      <div>
        <label htmlFor={item.id}><strong>{name}</strong></label>
      </div>
    </div>
  );
};

CheckBox.defaultProps = {
  onChange: () => console.log('onChange no implement'),
  onClick: () => console.log('onClick no implement'),
};

export default CheckBox;
