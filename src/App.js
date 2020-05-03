import React, { useState } from 'react';
import './App.css';
import ConfigBarContainer from './containers/ConfigBarContainer';
import CanvasGrid from './components/CanvasGrid';
import CanvasGridMultiplier from './components/CanvasGridMultiplier';
import DropZone from './components/DropZone';

export const AppContext = React.createContext({});

const DEFAULT_ROWS = 7;
const DEFAULT_COLUMNS = 7;

const WIDTH = 300;
const HEIGHT = 300;

function App() {

  const [columns, setColumns] = useState(DEFAULT_COLUMNS);
  const [rows, setRows] = useState(DEFAULT_ROWS);
  const [multiplier, setMultiplier] = useState(2);
  const [img, setImg] = useState(null);

  const handleSubmit = (values) => {
    setColumns(values.columns);
    setRows(values.rows);
    setMultiplier(values.multiplier);
  };

  return (
    <AppContext.Provider value={{ columns, rows, multiplier, setColumns, setRows, setMultiplier}}>
      <div className="App">
        <ConfigBarContainer onSubmit={handleSubmit} />
        <div className="canvas-grids-container">
          <DropZone onSuccess={(imgUrl) => setImg(imgUrl)}>
            <CanvasGrid
              id="image-canvas-grid"
              rows={rows}
              columns={columns}
              width={WIDTH}
              height={HEIGHT}
              background={img}
            />
          </DropZone>
          <CanvasGridMultiplier
            id="blank-canvas-grid"
            rows={rows}
            columns={columns}
            multiplier={multiplier}
            width={WIDTH}
            height={HEIGHT}
            strokeColor="#999"
          />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
