import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const CanvasGrid = ({id, rows, columns, width, height}) => {
  const canvas = useRef();
  const [rowSize, setRowSize] = useState(0);
  const [columnSize, setColumnSize] = useState(0);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    clearCanvas();
    setRowSize(height / rows);
    setColumnSize(width / columns);
  }, [rows, columns, height, width]);

  const drawVerticalLine = useCallback((location) => {
    if(ctx) {
      ctx.beginPath();
      ctx.moveTo(location, 0);
      ctx.lineTo(location, height);
      ctx.closePath();
      ctx.stroke();
    }
  }, [ctx, height]);

  const drawHorizontalLine = useCallback((location) => {
    if(ctx) {
      ctx.beginPath();
      ctx.moveTo(0, location);
      ctx.lineTo(width, location);
      ctx.closePath();
      ctx.stroke();
    }
  }, [ctx, width]);


  const clearCanvas = useCallback(() => {
    if(ctx) {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    }
  }, [ctx, canvas?.current?.width, canvas?.current?.height]);


  useEffect(() => {
    if(!ctx) {
      setCtx(canvas.current.getContext("2d"))
    }
  }, [canvas]);


  useEffect(() => {
    if(ctx) {
      clearCanvas();
      for (let i = 1; i < rows; i++) {
        drawVerticalLine(rowSize * i);
      }
      for (let i = 1; i < columns; i++) {
        drawHorizontalLine(columnSize * i);
      }
    }
  }, [clearCanvas, columnSize, columns, drawHorizontalLine, drawVerticalLine, rowSize, rows]);


  return (
    <canvas
      id={id}
      ref={canvas}
      width={width}
      height={height}
      style={{
        border: '1px solid #000000',
      }}
    />
  )
};

CanvasGrid.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
CanvasGrid.defaultProps = {
  rows: 3,
  columns: 3,
  width: 200,
  height: 200,
};

export default CanvasGrid;
