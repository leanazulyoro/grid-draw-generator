import React from 'react';
import PropTypes from 'prop-types';
import './ConfigBar.scss'

const ConfigBar = ({
  columns,
  rows,
  multiplier,
  linkRowsAndCols,
  onColumnsChange,
  onRowsChange,
  onMultiplierChange,
  onToggleLinkRowsCols,
  onSubmit,
}) => {

  const handleRowsAndColsChange = (target, value) => {
    const handlers = {
      rows: onRowsChange,
      cols: onColumnsChange,
    };
    if (linkRowsAndCols) {
      Object.keys(handlers).map((key) => {
        handlers[key](value);
      })
    }
    handlers[target](value);
  };

  return (
    <div id="config-bar" className="config-bar">
      <form onSubmit={onSubmit}>
        <div className="form-control form-control-text">
          <label htmlFor="columns">Columns</label>
          <input name="columns" type="number" value={columns}
                 onChange={(e) => {handleRowsAndColsChange('cols', e.target.value)}}
          />
        </div>
        <div className="form-control form-control-btn">
          <label htmlFor="link-rows-cols">
            <input name="link-rows-cols" type="checkbox" checked={linkRowsAndCols} onChange={onToggleLinkRowsCols}/>
          </label>
        </div>
        <div className="form-control form-control-text">
          <label htmlFor="rows">Rows</label>
          <input name="rows" type="number" value={rows}
                 onChange={(e) => handleRowsAndColsChange('rows', e.target.value)}
          />
        </div>

        <div className="form-control form-control-dropdown">
          <label htmlFor="size">Size of drawing grid</label>
          <select name="size"
                  onChange={(e) => onMultiplierChange(e.target.value)}
                  defaultValue={multiplier}
          >
            <option value={1}>Single</option>
            <option value={2}>Double</option>
          </select>
        </div>
      </form>
    </div>
  )
};

ConfigBar.propTypes = {
  columns: PropTypes.number,
  rows: PropTypes.number,
  multiplier: PropTypes.number,
  linkRowsAndCols: PropTypes.bool,
  onColumnsChange: PropTypes.func,
  onRowsChange: PropTypes.func,
  onMultiplierChange: PropTypes.func,
};

ConfigBar.defaultProps = {
  columns: 3,
  rows: 3,
  multiplier: 2,
  linkRowsAndCols: true,
  onColumnsChange: () => {},
  onRowsChange: () => {},
  onMultiplierChange: () => {},
};

export default ConfigBar;
