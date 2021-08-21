import React from 'react';
import { Contador } from './features/counter/Counter';
import {ChangingColor} from './features/color-button/colour-button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Contador/>
      <ChangingColor/>
    </div>
  );
}

export default App;
