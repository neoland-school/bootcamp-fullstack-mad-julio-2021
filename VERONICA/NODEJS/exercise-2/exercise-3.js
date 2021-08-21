// 3- Crear un programa que lea el archivo generado en el programa anterior y devuelva (imprimir por pantalla) solo los países europeos. Modificar el programa para que acepte el continente por parámetro del programa. (node app.js europa)


import {readFile} from 'fs';


const myArgs = process.argv.slice(2);
//Arr es un array

readFile('countries.json', function(err, data) {
    if (err) throw err; 
    console.log(JSON.parse(data).filter(data =>data.continente === myArgs[0])); 
  });


  console.log('Parámetro continente: ', myArgs);