import CanvasGrid from './CanvasGrid';
import React from 'react';

const CanvasGridMultiplier = ({rows, columns, multiplier, width, height}) => {
  return (
    <CanvasGrid
      rows={rows}
      columns={columns}
      width={width * multiplier}
      height={height * multiplier}
    />
  );
};

export default CanvasGridMultiplier;
