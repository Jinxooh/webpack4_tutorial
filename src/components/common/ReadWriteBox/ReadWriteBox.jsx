import React from 'react';
import ClickableLabel from './ClickableLabel';

const ReadWriteBox = ({
  key, name, onChange, disabled, read, write, onClick,
}) => {
  return (
    <div className="check-box" key={key}>
      <input type="checkbox" name={name} value="disabled" onChange={onChange} checked={disabled} />
      <div>
        <strong><ClickableLabel onClick={onClick} name={name} displayName={name} value="disabled" checked={!disabled} /></strong>
        { disabled && (<div className="sub-menu">
          <input type="checkbox" name={name} value="read" onChange={onChange} checked={read} />
          <ClickableLabel onClick={onClick} name={name} displayName="Read" value="read" checked={!read} />
          <input type="checkbox" name={name} value="write" onChange={onChange} checked={write} />
          <ClickableLabel onClick={onClick} name={name} displayName="Write" value="write" checked={!write} />
        </div>)}
      </div>
    </div>
  );
};

ReadWriteBox.defaultProps = {
  onChange: () => console.log('no implement'),
  disabled: true,
  read: true,
  write: true,
};

export default ReadWriteBox;
