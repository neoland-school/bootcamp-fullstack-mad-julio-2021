import React,{useState} from 'react';
import {themes, ThemeContext} from '../../theme/theme-context';


function ThemePage({children}) { //Componente Wrapper engloba a sus children y le está dando una funcionalidad de un contexto de tema
  
    const [modo, setModo] = useState(themes.light);
    
    const setTema = () => {
        console.log('modo =' , modo);
        // setModo(modo === themes.dark ? themes.light : themes.dark)
        setModo((oldModeTheme)=> oldModeTheme  === themes.dark ? themes.light : themes.dark)
    }
    
    return (
      <ThemeContext.Provider value= {[
        modo,
        setTema
      ]}>
        {children}
        </ThemeContext.Provider>
    );
  }
  
  export default ThemePage;

  
 