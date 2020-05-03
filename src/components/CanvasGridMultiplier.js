import CanvasGrid from './CanvasGrid';
import React from 'react';

const CanvasGridMultiplier = ({multiplier, width, height, ...props}) => {
  return (
    <CanvasGrid
      {...props}
      width={width * multiplier}
      height={height * multiplier}
    />
  );
};

export default CanvasGridMultiplier;
