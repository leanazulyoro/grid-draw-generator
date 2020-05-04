import CanvasGrid from '../CanvasGrid/CanvasGrid';
import React from 'react';

const MultipliedCanvasGrid = ({multiplier, width, height, ...props}) => {
  return (
    <CanvasGrid
      {...props}
      width={width * multiplier}
      height={height * multiplier}
    />
  );
};

export default MultipliedCanvasGrid;
