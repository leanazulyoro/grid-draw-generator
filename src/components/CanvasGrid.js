import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const CanvasGrid = ({id, rows, columns, width, height, background}) => {
  const canvas = useRef();
  const [rowSize, setRowSize] = useState(0);
  const [columnSize, setColumnSize] = useState(0);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    clearCanvas();
    setRowSize(height / rows);
    setColumnSize(width / columns);
  }, [rows, columns, height, width]);

  const scaleToFit = useCallback((img) => {
    // get the scale
    const scale = Math.min(canvas.current.width / img.width, canvas.current.height / img.height);
    // get the top left position of the image
    const x = (canvas.current.width / 2) - (img.width / 2) * scale;
    const y = (canvas.current.height / 2) - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }, [ctx, canvas?.current?.width, canvas?.current?.height, width, height]);


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

      if(!!background) {
        // Draw a big yellow rectangle
        const image = new Image();
        image.src = background;
        image.onload = function(){
          // Change the globalCompositeOperation to destination-over so that anything
          // that is drawn on to the canvas from this point on is drawn at the back
          // of what's already on the canvas
          ctx.globalCompositeOperation = 'destination-over';
          scaleToFit(this);

          //ctx.drawImage(image, 0, 0);
          // Now return the globalCompositeOperation to source-over and draw a
          // blue rectangle
          ctx.globalCompositeOperation = 'source-over';
        };
      }
    }
  }, [clearCanvas, columnSize, columns, drawHorizontalLine, drawVerticalLine, rowSize, rows, width, height, background]);


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
  background: PropTypes.string,
};
CanvasGrid.defaultProps = {
  rows: 3,
  columns: 3,
  width: 200,
  height: 200,
  background: '',
};

export default CanvasGrid;
