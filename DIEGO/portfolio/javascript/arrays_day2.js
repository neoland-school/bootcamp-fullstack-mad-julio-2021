// 1- (Easy) Crear una funcion que dado un array numeros me diga si todos los numeros son mayores que 10
const array = [30, 40, 50, 9, 20, 27];

// function checkAllNumbers(value) {

//     return value > 10;

// }

// console.log(array.every((checkAllNumbers)));

//PASADO A ARROW FUNCTION:
console.log(array.every(value => value > 10));

// 2- (Easy) Crear una funcion que dado un array numeros me diga si hay alguno mayor que 10

const array2 = [3, 4, 50, 1, 3, 7];

// function checkNumbers(value) {

//     return value > 10;

// }
//PASADO A ARROW FUNCTION:
console.log(array2.some((value => value > 10)));

// 3- (Easy) Crear una funcion que dado un array de strings, devuelva un array sin modificar el de entrada, con todos los strings en mayúsculas

const stringsArray = ['hola', 'mundo', 'programa', 'top'];

// function makeUpper(value) {

//     return value.toUpperCase();

// }
//PASADO A ARROW FUNCTION:
console.log(stringsArray.map(value => value.toUpperCase()));
console.log(stringsArray);

// 4- (Easy) Crear una funcion que dado un array de strings, modifique el array con todos los strings en mayúsculas

const stringsArray2 = ['hola', 'mundo', 'programa', 'top'];

// function makeUpper2(value, pos, arr) {

//     arr[pos] = arr[pos].toUpperCase();

// }
//PASADO A ARROW FUNCTION:
stringsArray2.forEach((value, pos, arr) => arr[pos] = arr[pos].toUpperCase());
console.log(stringsArray2);

// 5- (Easy) Crear una función que dado un array elimine el elemento que se encuentra en la mitad (redondeada hacia abajo)

let miArray = [2, 4, 'a', 2, 3];

// function cutArray() {

//     miArray.splice(Math.trunc(miArray.length / 2), 1);

//     return miArray;
// }

//PASADO A ARROW FUNCTION:

const sacaDeMiArray = array => array.splice(Math.trunc(array.length / 2), 1);

sacaDeMiArray(miArray);

console.log(miArray);



// 6- (Medium) Crear una funcion que dado un array de strings, me devuelva los strings de la posicion de la mitad del array, los dos anteriores y los dos siguientes, en un mismo string separados por espacios

let stringsArray3 = ['jamon', 'ensalada', 'zapato', 'hola', 'mundo', 'programa', 'top', 'empresa', 'juego', 'elemento', 'ensaladera'];

// function slicingAnArray(array) {

//     let cutArray = array.slice((array.length / 2) - 3, (array.length / 2) + 2);

//     let result = cutArray.join(' ');

//     return result;

// }

//PASAR A ARROW FUNCTIONS:

const slicesArray = array => {
    let cutArray = array.slice((array.length / 2) - 3, (array.length / 2) + 2);

    let result = cutArray.join(' ');

    return result;

}

console.log(slicesArray(stringsArray3));



// 7- (Medium) Crear una funcion que dado un array bidimensional de strings, lo convierta a un array unidimensional con todos los strings consegutivos.
//    EJ: [['a','b'], ['c','d']] => ['a','b','c','d']

let stringsBidimArray = [['jamon', 'ensalada'], ['zapato', 'hola'], ['mundo', 'programa']];


console.log(stringsBidimArray.flat());

//console.log(stringsBidimArray);

// const stringsArray2 = ['hola', 'mundo', 'programa', 'top'];

// function makeUpper2(value, pos, arr) {

//     arr[pos] = arr[pos].toUpperCase();

// }
// stringsArray2.forEach(makeUpper2);
// console.log(stringsArray2);








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


/**
 * La criticidad va a contemplar 3 posibles valores. 1-leve / 2-moderada / 3-alta
 * 
 */


/**
 * 
 * @param {*} arrayPacientes 
 * @param {*} arrayCriticidad 
 * 
 * Debemos ordenar a los pacientes del siguiente modo: 
 * 
 *     -los más criticos entran primero
 *     -en caso de misma criticidad en dos pacientes consecutivos entra primero
 *       el que haya llegado primero.
 */
let nombrePaciente = ['paciente0', 'paciente1', 'paciente2', 'paciente3', 'paciente4'];
let criticidad = [1, 3, 2, 1, 2];

function orderPatient(patients, urgency) {
    let temp = 0;
    let tempPat = '';
    for (let i = 0; i < patients.length - 1; i++) {
        while (urgency[i] < urgency[i + 1]) {
            for (let j = i; j < patients.length - 1; j++) {
                temp = urgency[j];
                urgency[j] = urgency[j + 1];
                urgency[j + 1] = temp;

                tempPat = patients[j];
                patients[j] = patients[j + 1];
                patients[j + 1] = tempPat;
            }
        }
    }
}
function nextPatient(patients, urgency) {

    let nextPat = patients[0];
    patients.shift();
    criticidad.shift();

}

orderPatient(nombrePaciente, criticidad);
nextPatient(nombrePaciente, criticidad);
nextPatient(nombrePaciente, criticidad);
nextPatient(nombrePaciente, criticidad);

console.log(criticidad);
console.log(nombrePaciente);





// function compareAscendent(num1, num2) {
//     // if (num1 < num2) {
//     //     return -1;
//     // } else if (num1 === num2) {
//     //     return 0;
//     // } else {
//     //     return 1;
//     // }
//     return num1 - num2;
// }
// function compareDescendent(num1, num2) {
//     return num2 - num1;
// }

// console.log(unOrderedArray.sort(compareDescendent));

// function ordenaLista(num1, num2) {


// }

// listaEntrada.sort(ordenaLista);




// function siguientePaciente(arrayPacientes, arrayCriticidad) {

//     for (let i = 0; i < arrayPacientes.length; i++) {
//         for (let j = 0; j < arrayCriticidad.length; j++) {

//         }
//     }

