import React, { useState } from 'react';
import './App.scss';
import CanvasGrid from './components/CanvasGrid/CanvasGrid';
import MultipliedCanvasGrid from './components/MultipliedCanvasGrid/MultipliedCanvasGrid';
import DropZone from './components/DropZone/DropZone';
import ConfigBar from './components/ConfigBar/ConfigBar';
import PrintButton from './components/PrintButton/PrintButton';
import BottomBar from './components/BottomBar/BottomBar';

export const AppContext = React.createContext({});

const DEFAULT_ROWS = 7;
const DEFAULT_COLUMNS = 7;

const WIDTH = 300;
const HEIGHT = 300;

function App() {

  const [columns, setColumns] = useState(DEFAULT_COLUMNS);
  const [rows, setRows] = useState(DEFAULT_ROWS);
  const [linkRowsCols, setLinkRowsCols] = useState(true);
  const [multiplier, setMultiplier] = useState(2);
  const [img, setImg] = useState(null);

  return (
    <AppContext.Provider value={{ columns, rows, multiplier, setColumns, setRows, setMultiplier}}>
      <div className="App">
        <ConfigBar
          rows={rows}
          columns={columns}
          multiplier={multiplier}
          onColumnsChange={setColumns}
          onRowsChange={setRows}
          onMultiplierChange={setMultiplier}
          linkRowsAndCols={linkRowsCols}
          onToggleLinkRowsCols={() => setLinkRowsCols(() => !linkRowsCols)}
        />
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
          <MultipliedCanvasGrid
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
      <BottomBar>
        <PrintButton />
      </BottomBar>
    </AppContext.Provider>
  );
}

export default App;
