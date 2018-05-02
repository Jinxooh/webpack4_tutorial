import React from 'react';
import Tag from './Tag';

const Tags = ({ children, tagArray, onRemove, onClick }) => {
  return (
    <div className="tag-container" onClick={onClick}>
      {tagArray.map((val, idx) => {
        return (
          <Tag key={idx} index={val.index} onRemove={onRemove} >{val.content}</Tag>
        );
      })}
      {children}
    </div>
  );
};

export default Tags;