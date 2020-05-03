import React from 'react';
import PropTypes from 'prop-types';

const ConfigBar = ({
  width,
  height,
  multiplier,
  onWidthChange,
  onHeightChange,
  onMultiplierChange,
  onSubmit
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="width">Width</label>
          <input name="width" type="number" value={width}
                 onChange={(e) => onWidthChange(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input name="height" type="number" value={height}
                 onChange={(e) => onHeightChange(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="size">Size</label>
          <select name="size"
                  onChange={(e) => onMultiplierChange(e.target.value)}
                  defaultValue={multiplier}
          >
            <option value={1}>Single</option>
            <option value={2}>Double</option>
            <option value={3}>Triple</option>
            <option value={4}>Cuadruple</option>
          </select>

          <button type="submit">Set!</button>
        </div>
      </form>
    </div>
  )
};

ConfigBar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  multiplier: PropTypes.number,
  onWidthChange: PropTypes.func,
  onHeightChange: PropTypes.func,
  onMultiplierChange: PropTypes.func,
};

ConfigBar.defaultProps = {
  width: 3,
  height: 3,
  multiplier: 2,
  onWidthChange: () => {},
  onHeightChange: () => {},
  onMultiplierChange: () => {},
};

export default ConfigBar;
