import React from 'react';
import LoadingTextProvider from '../js/function/loadingTextProvider';

const loading = (props) => {
  const { type } = props;

  return (
    <div className="loading">
      <div>
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="loading-text">{ LoadingTextProvider(type) }</div>
      </div>
    </div>
  );
};

export default loading;