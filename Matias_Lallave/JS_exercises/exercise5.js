// 1- (Easy) Crear una funcion que dado un array numeros me diga si todos los numeros son mayores que 10
// 2- (Easy) Crear una funcion que dado un array numeros me diga si hay alguno mayor que 10
// 3- (Easy) Crear una funcion que dado un array de strings, devuelva un array sin modificar el de entrada, 
//              con todos los strings en mayúsculas
// 4- (Easy) Crear una funcion que dado un array de strings, modifique el array con todos los strings en mayúsculas
// 5- (Easy) Crear una función que dado un array elimine el elemento que se encuentra en la mitad (redondeada hacia abajo)
// 6- (Medium) Crear una funcion que dado un array de strings, me devuelva los strings de la posicion de la mitad del array, 
//              los dos anteriores y los dos siguientes, en un mismo string separados por espacios
// 7- (Medium) Crear una funcion que dado un array bidimensional de strings, lo convierta a un array unidimensional con 
//              todos los strings consecutivos.
//    EJ: [['a','b'], ['c','d']] => ['a','b','c','d']
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

//----------EXERCISE1----------

console.log('\nEXERCISE 1');

function isEverythingOver10(array) {
    function higherThan10(value) {
        return value > 10;
    }
    return testArray.every(higherThan10);
}

let testArray = [11, 17, 18, 13, 15, 11, 11, 1, 17];
console.log(isEverythingOver10(testArray));

//----------EXERCISE2----------

console.log('\nEXERCISE 2');

function isSomethingOver10(array) {
    function higherThan10(value) {
        return value > 10;
    }
    return testArray.some(higherThan10);
}

testArray = [2, 7, 8, 3, 5, 1, 1, 1, 17];
console.log(isSomethingOver10(testArray));

//----------EXERCISE3----------

console.log('\nEXERCISE 3');

function toUpperUnmodified(array) {
    function toUpperCaseEverything(value) {
        return value.toUpperCase();
    }
    return array.map(toUpperCaseEverything);
}

testArray = ['caballo', 'perro', 'elefante', 'poni', 'mono'];

console.log(toUpperUnmodified(testArray));
console.log(testArray);

//----------EXERCISE4----------

console.log('\nEXERCISE 4');

function toUpperModified(array) {

    function toUpperCaseEverything2(value, i, array) {
        array[i] = array[i].toUpperCase();
    }

    array.forEach(toUpperCaseEverything2);

    return array;
}

console.log(toUpperModified(testArray));

//----------EXERCISE5----------

console.log('\nEXERCISE 5');

testArray = ['caballo', 'perro', 'elefante', 'poni', 'mono', 'gato'];

function spliceToMiddle(array) {
    let removedTestArray = array.splice(Math.floor((array.length - 1) / 2), 1);
    return array;
}

console.log(spliceToMiddle(testArray));

//----------EXERCISE6----------

console.log('\nEXERCISE 6');

testArray = ['caballo', 'perro', 'elefante', 'poni', 'mono', 'gato', 'jirafa', 'leon', 'pantera'];

function sliceMiddle5width(array) {

    let testArraySub = array.slice(Math.floor((array.length - 1) / 2), (Math.floor((array.length - 1) / 2) + 3));

    let testArraySub2 = array.slice((Math.floor((array.length - 1) / 2) - 2), (Math.floor((array.length - 1) / 2)));

    let testArrayFinal = testArraySub2.concat(testArraySub);

    return testArrayFinal.join(' ');
}

console.log(sliceMiddle5width(testArray));

//----------EXERCISE7----------

console.log('\nEXERCISE 7');

testArray = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8],
    [9, 0]
];

function flip2Dto1D(array) {

    let auxArray = [];

    for (let i = 0; i < array.length; i++) {
        let anotherAuxArray = [];
        for (let j = 0; j < array[i].length; j++) {
            anotherAuxArray[j] = array[i][j];
        }
        auxArray = auxArray.concat(anotherAuxArray);
    }

    return auxArray;
}

console.log(flip2Dto1D(testArray));

//----------EXERCISE8----------

console.log('\nEXERCISE 8');

function nextPatient (arrayName, arrayCrit) {
    arrayName.reverse();
    arrayCrit.reverse();

    let nextName = arrayName.pop();
    let nextCrit = arrayCrit.pop();

    arrayName.reverse();
    arrayCrit.reverse();

    return nextName
}

let testPatient = ['Matias', 'Jose','Jean','Jorge','Marta','Paloma'];
let testCrit = [9,6,6,5,3,3];

let whoIsNextPatient = nextPatient(testPatient, testCrit);

console.log('Next patient is: ' + whoIsNextPatient);

console.log(testPatient);
console.log(testCrit);