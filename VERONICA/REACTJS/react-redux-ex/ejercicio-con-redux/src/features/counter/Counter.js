import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  incrementar,
  selectContador,
} from './counterSlice'; 
import './style.css';


export function Contador() {
  const countingNumber = useSelector(selectContador); //Utilizar mi selector creado en counter Slice
  const dispatch = useDispatch(); //Utilizo el useDispatch para poder lanzar acciones en los eventos de la interfaz de usuario.

  return (
     <React.Fragment>
      <h1>Hola mundo React Redux</h1>
       <h2>hacer un boton que incremente cada vez que se hace un click (es hacer el ejercicio paso a paso basico del react-redux)</h2>
        <div className='container-boton'>
        <span>{countingNumber}</span>
        <button onClick={() => dispatch(incrementar())} //Evento que me incrementa cada vez que le doy click
        > Incrementa </button>
        </div>
        </React.Fragment>
  );
}
