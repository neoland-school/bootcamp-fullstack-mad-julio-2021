// 3- Desarrollar el código para Llamar al API y pintar por consola todos los paises ordenados por numero de caracteres en su nombre en inglés de menor a mayor

//Paises - ordenados - ingles - menos a mayor = 

// necesitaré método str.sort() para ordenar de menor a mayor
// name_en atributo del objeto



import React from 'react';
import { useEffect } from 'react';

function ExerciseRepasoCuatro (){


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
      const countriesOrdered = d.countries.filter(d=> d.name_en)
        console.log(countriesOrdered.sort(function(a,b){
          return  a.name_en.length - b.name_en.length
      }))
      })
      
    });

 return(
 <div></div>
 );


}

export default ExerciseRepasoCuatro;