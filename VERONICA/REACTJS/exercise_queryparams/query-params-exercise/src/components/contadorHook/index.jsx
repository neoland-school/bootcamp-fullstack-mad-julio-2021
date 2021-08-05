// Crear un componente de función en el que tenemos un boton que actualice ese valor en un p (un contador). Hacerlo primero como componente de clase y luego transformarlo a función con hooks


import React, { useState } from 'react';

function ContadorButton() {
    // Declaración de una variable de estado que llamaremos "count"
    const [contador, setContador] = useState(0);
  
      return (
        <div>
          <p>Has hecho click {contador} veces</p>
          <button onClick={() => setContador(contador + 1)}>
            Presiona el botón
          </button>
        </div>
      );
    }

  export default ContadorButton;