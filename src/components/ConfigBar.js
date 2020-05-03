import React from 'react';
import PropTypes from 'prop-types';

const ConfigBar = ({
  columns,
  rows,
  multiplier,
  onColumnsChange,
  onRowsChange,
  onMultiplierChange,
  onSubmit
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="columns">Columns</label>
          <input name="columns" type="number" value={columns}
                 onChange={(e) => {onColumnsChange(e.target.value)}}
          />
        </div>
        <div>
          <label htmlFor="rows">Rows</label>
          <input name="rows" type="number" value={rows}
                 onChange={(e) => onRowsChange(e.target.value)}
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
  columns: PropTypes.number,
  rows: PropTypes.number,
  multiplier: PropTypes.number,
  onColumnsChange: PropTypes.func,
  onRowsChange: PropTypes.func,
  onMultiplierChange: PropTypes.func,
};

ConfigBar.defaultProps = {
  columns: 3,
  rows: 3,
  multiplier: 2,
  onColumnsChange: () => {},
  onRowsChange: () => {},
  onMultiplierChange: () => {},
};

export default ConfigBar;
