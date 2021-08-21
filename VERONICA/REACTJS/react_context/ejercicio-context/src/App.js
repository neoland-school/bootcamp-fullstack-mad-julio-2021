import './App.css';
import React from 'react';
import ThemePage from './components/theme-wrapper-page';
import ExportandoThemeContext from './components/toggle_component';



function App() {
  return (
    <ThemePage>
      <ExportandoThemeContext></ExportandoThemeContext> 
      {/* children */}
    </ThemePage>
  );
}

export default App;
