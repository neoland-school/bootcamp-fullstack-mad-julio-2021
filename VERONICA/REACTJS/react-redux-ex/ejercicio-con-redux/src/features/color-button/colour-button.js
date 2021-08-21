import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
cambiarColor, //Acciones que ejecuta el selector
cambioDeColor, //Selector
} from './ColorSlice'; 
import './style.css';




export function ChangingColor() {
  const cambiandoColor = useSelector(cambioDeColor); //Utilizar mi selector creado en counter Slice
  const dispatch = useDispatch(); //Utilizo el useDispatch para poder lanzar acciones en los eventos de la interfaz de usuario.
//   const [color, setColor] = useState('teal');
console.log(cambiandoColor);

  return (
     <React.Fragment>
        <div className="container-exercise">
       <h2>hacer un segundo boton cambie de color cada vez que se incremente el valor</h2>
        <div className='container-boton'>
        {/* <span>{countin}</span> */}
        <button onClick={() => dispatch(cambiarColor())} //Evento que me incrementa cada vez que le doy click
        > Incrementa </button>
        </div>
        </div>
        </React.Fragment>
  );
}
