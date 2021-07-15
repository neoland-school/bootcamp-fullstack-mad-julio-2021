// * 1- crear una funcion que reciba dos numeros y devuelva la suma de ellos

let numberOne = 4;
let numberTwo = 5;

const ADD = (a,b) => a + b;

console.log(ADD(numberOne,numberTwo));

//  * 2- crear una funcion que reciba un string y devuelva el string en mayusculaç

let myStringWorld = 'Hello World';

const STRING_ONE = (value) => value.toUpperCase();

console.log(STRING_ONE(myStringWorld));

//  * 3- crear una funcion que reciba un string y devuelva los 3 primeros caracteres

let myStringNotCompleted = 'Espectacular';

const FIRST_CHARACTERS = (value) => {
      return value.substring(0,3);
}

console.log(FIRST_CHARACTERS(myStringNotCompleted));

//  * 4- crear una funcion que reciba un array de numeros y devuelva un array con los que son mayores que 10

let arrNumbers = [5,20,1,11,2];

const greatherThanTen = (a,b) => {
   
        return a - b
}

console.log(greatherThanTen(arrNumbers));


//  * 5- crear una funcion que reciba un array de strings y devuelva un array con los strings capitalized
//  *      ej-> ['gato', 'perro'] -> ['Gato', 'Perro]
//  *          ['Gato', 'perro'] -> ['Gato', 'Perro]
//  *          ['gAto', 'peRRo'] -> ['Gato', 'Perro]
//  */