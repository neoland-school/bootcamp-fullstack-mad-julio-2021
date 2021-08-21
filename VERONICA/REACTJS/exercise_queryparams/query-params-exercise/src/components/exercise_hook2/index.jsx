// 1. Crear un componente que cuando alterne el color de fondo de un div de 100px x 100px de verde a rojo, cuando hagan click en otro botón que creemos en el componente. Inicialmente estará en verde. Hacerlo en su versión de componente de clase y transformarla a componente de función

// 2. Eliminar el botón anterior y alternar el color solo cuando cambie el count del ejercicio 1. (hint: usar useEffect). Primero versión en componente de clase y versión en componente función


// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import './style.css';


function MyBox() {

    const [color, setColor] = useState('green');
    // const [contador, setContador] = useState(0);
    

    // useEffect(() => {
    // if (count>0){
    //   setColor(e => e ==='green' ? 'red' : 'red');
     // }
    //   },[contador]);
    
    return (
      <div>
        <div className={'color-' + color}>
        </div>
        {/* Este es el boton del primer ejercicio */} 
        <button onClick={() => setColor('red')}>
          Presiona el botón
        </button>
        {/* Este es el boton del segundo ejercicio */}
        {/* <button onClick={() => setContador(setColor(color === 'green' ? 'green' : 'red'))}>
        Change name
      </button> */}
      </div>
     
    );
        
} 


export default MyBox;