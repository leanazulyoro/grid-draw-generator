import React, { useState } from 'react';
import { AppContext } from '../App';
import ConfigBar from '../components/ConfigBar';

const ConfigBarContainer = ({onSubmit}) => {

  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(3);
  const [multiplier, setMultiplier] = useState(2);

  return (
    <AppContext.Consumer>
      {(context) => (
        <ConfigBar columns={columns} rows={rows} multiplier={multiplier}
                   onColumnsChange={setColumns}
                   onRowsChange={setRows}
                   onMultiplierChange={setMultiplier}
                   onSubmit={(e) => {
                     e.preventDefault();
                     onSubmit({columns, rows, multiplier})
                   }} />
      )}
    </AppContext.Consumer>
  )
};

export default ConfigBarContainer;
