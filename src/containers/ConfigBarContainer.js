import React, { useState } from 'react';
import { AppContext } from '../App';
import ConfigBar from '../components/ConfigBar';

const ConfigBarContainer = ({onSubmit}) => {

  const [width, setWidth] = useState(3);
  const [height, setHeight] = useState(3);
  const [multiplier, setMultiplier] = useState(2);

  return (
    <AppContext.Consumer>
      {(context) => (
        <ConfigBar width={width} height={height} multiplier={multiplier}
                   onWidthChange={setWidth}
                   onHeightChange={setHeight}
                   onMultiplierChange={setMultiplier}
                   onSubmit={(e) => {
                     e.preventDefault();
                     onSubmit({width, height, multiplier})
                   }} />
      )}
    </AppContext.Consumer>
  )
};

export default ConfigBarContainer;
