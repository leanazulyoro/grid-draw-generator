import React from 'react';
import './BottomBar.scss';

const BottomBar = ({children}) => {
  return (
    <div className="bottom-bar">
      {children}
    </div>
  )
};

export default BottomBar;
