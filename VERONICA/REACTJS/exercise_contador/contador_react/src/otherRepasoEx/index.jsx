// 2- Desarrollar el código para Llamar al API y pintar por consola los países cuyo nombre en español tienen un numero de caracteres impar

// pintar paises - ES - caracter impar


import React from 'react';

import { useEffect } from 'react';

function ExerciseRepasoDos (){

useEffect(() => {
    // Ejecutar mi código asíncrono
    fetch('https://run.mocky.io/v3/5db18906-a9c2-4f4a-ad94-a14c40611157')
    // Cuando la promesa del fetch se resuelve, 
    //genero una nueva promesa con la respuesta en formato JSON
    .then(r => r.json())
    // Cuando la promesa del json() se resuelve, 
    //ya tengo los datos en un objeto y podría usarlos
    .then(d =>{
      const payCImparEs = d.countries.filter(c=> c.name_es.length%2 !== 0)
      console.log(payCImparEs);
    });
  });

 return(
 <div></div>
 );


}

export default ExerciseRepasoDos;