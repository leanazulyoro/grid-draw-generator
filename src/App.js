import React, { useState } from 'react';
import './App.css';
import ConfigBarContainer from './containers/ConfigBarContainer';

export const AppContext = React.createContext({
  width: 3,
  height: 3,
  multiplier: 2,
});

function App() {

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [multiplier, setMultiplier] = useState();

  const handleSubmit = (values) => {
    setWidth(values.width);
    setHeight(values.height);
    setMultiplier(values.multiplier);
  };

  return (
    <AppContext.Provider value={{ width, height, multiplier, setWidth, setHeight, setMultiplier}}>
      <div className="App">
        <ConfigBarContainer onSubmit={handleSubmit} />
        <div className="displayer">
          width: {width}
          <br />
          height: {height}
          <br />
          multiplier: {multiplier}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
