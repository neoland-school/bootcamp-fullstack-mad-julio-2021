import {useContext} from 'react';
import { ThemeContext } from '../../theme/theme-context';


function ExportandoThemeContext(){
    const theme = useContext(ThemeContext); //array
    // console.log(theme);
    const [modo, setTema ] = theme; //desconstruccion del array
    // console.log(modo);
    // console.log(setTema);
    return (
      <div>
      <h1 style={{background:modo.backgroundColor, color: modo.color}}>Mi página creada con el contexto en ReactJs</h1>
        <button onClick={setTema}>
          Dale click
        </button>
        </div>
      );
    }
export default ExportandoThemeContext;