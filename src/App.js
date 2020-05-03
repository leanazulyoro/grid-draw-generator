import React, { useState } from 'react';
import './App.css';
import ConfigBarContainer from './containers/ConfigBarContainer';
import CanvasGrid from './components/CanvasGrid';
import CanvasGridMultiplier from './components/CanvasGridMultiplier';
import DropZone from './components/DropZone';

export const AppContext = React.createContext({
  columns: 3,
  rows: 3,
  multiplier: 2,
});

const WIDTH = 200;
const HEIGHT = 200;

function App() {

  const [columns, setColumns] = useState();
  const [rows, setRows] = useState();
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
          />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
