import React from 'react';
import { useEffect } from 'react';

function ExerciseRepaso (){


useEffect(() => {
    // Ejecutar mi código asíncrono
    fetch('https://run.mocky.io/v3/5db18906-a9c2-4f4a-ad94-a14c40611157')
    // Cuando la promesa del fetch se resuelve, 
    //genero una nueva promesa con la respuesta en formato JSON
    .then(r => r.json())
    // Cuando la promesa del json() se resuelve, 
    //ya tengo los datos en un objeto y podría usarlos
    .then(d => {
      // busco dentro de mis datos el país españa
      const spain = d.countries.find(c => c.code === 'ES');
      // pinto su codigo
      console.log(spain.dial_code);
    })
 
  });

 return(
 <div></div>
 );


}

export default ExerciseRepaso;