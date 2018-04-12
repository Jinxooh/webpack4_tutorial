import React from 'react';

const SummaryLabel = ({ labelName, labelData }) => {
  let convert = null;
  if (labelData instanceof Date) convert = labelData.toDateString();
  if (labelData instanceof Array) convert = labelData.toString();
  if (typeof labelData === 'boolean') convert = labelData ? 'True' : 'False';

  return (
    <div className="summary-label">
      <div className="label-name">{labelName}</div>
      <div className="label-data">{convert || labelData}</div>
    </div>
  );
};

export default SummaryLabel;
