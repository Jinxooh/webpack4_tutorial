import React from 'react';
import L from 'react-loadable';

function Loading() {
  return <div>Loading...</div>;
}

const Loadable = opts =>
  L({
    loading: Loading,
    dealy: 300,
    loader: () => opts,
  });

export default Loadable;
