// * 1- crear una funcion que reciba dos numeros y devuelva la suma de ellos

let numberOne = 4;
let numberTwo = 5;

const ADD = (a,b) => a + b;

console.log(ADD(numberOne,numberTwo));

//  * 2- crear una funcion que reciba un string y devuelva el string en mayusculaç

let myStringWorld = 'Hello World';

const STRING_ONE = value => value.toUpperCase();

console.log(STRING_ONE(myStringWorld));

//  * 3- crear una funcion que reciba un string y devuelva los 3 primeros caracteres

let myStringNotCompleted = 'Espectacular';

const FIRST_CHARACTERS = value => {
      return value.substring(0,3);
}

console.log(FIRST_CHARACTERS(myStringNotCompleted));

//  * 4- crear una funcion que reciba un array de numeros y devuelva un array con los que son mayores que 10

let arrNumbers = [5,20,1,11,2,30,25];

const greatherThanTen = value => value >= 10;

console.log(arrNumbers.filter(greatherThanTen));
    
//  * 5- crear una funcion que reciba un array de strings y devuelva un array con los strings capitalized
//  *      ej-> ['gato', 'perro'] -> ['Gato', 'Perro]
//  *          ['Gato', 'perro'] -> ['Gato', 'Perro]
//  *          ['gAto', 'peRRo'] -> ['Gato', 'Perro]
//  */

let otherString = ['music', 'peAce', 'love', 'faMily'];

const stringCapitalized = value => value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);

console.log(otherString.map(stringCapitalized));

// EJERCICIOS DEL 15 JULIO CON ARROW FUNCTIONS

// 1- (Easy) Crear una funcion que dado un array numeros me diga si todos los numeros son mayores que 10

let arrayOfNumbers = [50,20,1,60];

const greatherThanNumberTen = value => value > 10;

console.log(arrayOfNumbers.every(greatherThanTen));


// 2- (Easy) Crear una funcion que dado un array numeros me diga si hay alguno mayor que 10

let otherArrOfNumbers = [9,20,1,60];

const anythingWithTen = value => value > 10;

console.log(otherArrOfNumbers.some(anythingWithTen));


// 3- (Easy) Crear una funcion que dado un array de strings, devuelva un array sin modificar el de entrada, con todos los strings en mayúsculas

let otherArrOfStrings = ['mother', 'father' , 'grandma', 'grandpa'];

const MODIFICATION_UPPER_CASE = value => value.toUpperCase();

console.log(otherArrOfStrings.map(MODIFICATION_UPPER_CASE));

// 4- (Easy) Crear una funcion que dado un array de strings, modifique el array con todos los strings en mayúsculas

let strModify = ['mountain','sea','nice'];

//with normal function
// function modify_AllString (value, index, arr){
//     arr[index] = arr[index].toUpperCase();
// }

// strModify.forEach(modify_AllString);
// console.log(strModify);

const MODIFY_ALLSTRING = (value,index,arr) => arr[index] = arr[index].toUpperCase();

strModify.forEach(MODIFY_ALLSTRING); // aqui daría solo undefined con forEach
console.log(strModify); //Imprime el array modificado

// const MODIFY_ALLSTRINGS = value => value.push().toUpperCase();

// console.log(strModify.forEach(MODIFY_ALLSTRINGS));

// 5- (Easy) Crear una función que dado un array elimine el elemento que se encuentra en la mitad (redondeada hacia abajo)

// dado un array elimine el que se encuentre en la mitad toca dividir
// redondeado hacia abajo = el math trunc me devuelve el número entero

let arrTrueOrFalse = [true, false, true, false, true];

const DELETE_VAL= (val, index, arr) => arrTrueOrFalse.splice((Math.trunc(arrTrueOrFalse/2)),1);

DELETE_VAL();
console.log(arrTrueOrFalse);


// 6- (Medium) Crear una funcion que dado un array de strings, me devuelva los strings de la posicion de la mitad del array, los dos anteriores y los dos siguientes, en un mismo string separados por espacios

let arrPlusString = ['uno', 'dos', 'tres', 'cuatro','cinco', 'seis', 'siete', 'ocho', 'nueve','diez'];

//Otra solucion
// let arrLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// function middlTwo (){
//     arrMiddl = arrLetters.slice((arrLetters.length/2)-3, (arrLetters.length/2)+3)
// }
// middlTwo();
// console.log( arrMiddl.join(' '));



// 7- (Medium) Crear una funcion que dado un array bidimensional de strings, lo convierta a un array unidimensional con todos los strings consegutivos.
//    EJ: [['a','b'], ['c','d']] => ['a','b','c','d'] //se utiliza el flat

let arrBidi = [['a','b'], ['c','d']]

const fromBidiToDim = (value, index, arr) => arr[index].flat() === value;

fromBidiToDim();

console.log(arrBidi);

// 8- (Hard)Cuando vamos a urgencias, nos atienden en recepción y nos asignan un orden para ser atendido.
//   Este orden va en funcion de dos factores:
//      1.- Orden de llegada a urgencias
//      2.- Criticidad de la urgencia
//   Construir una función "siguientePaciente" que dados dos arrays de la misma longitud
//    - EL primer array es el de los nombres de los pacientes en orden de llegada
//    - El segundo array representa la criticidad asociada a cada paciente
//   El array de criticidad está asociado con el array de nombres por su posicion de forma que:
//   El paciente en la primera posicion del array de nombres tiene la criticidad de la primera 
//   posicion del array de criticidades.
//   La función "siguientePaciente" debe eliminar y devolver el nombre del siguiente paciente
//   que hay que atender en urgencias.


